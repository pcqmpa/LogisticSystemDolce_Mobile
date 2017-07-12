/**
 * Module with the orders epic.
 * @module src/epics/orders
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AppState,
  FetchResponse,
  Order,
  ReduxStore
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';

// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import { initOrders } from '../actions/orders';

// Libs.
import transmuter from '../libs/transmuter';

// Utils.
import { getOrdersToDeliverRequest } from '../utils/requests';

// Constants.
import { REQUEST_ORDERS } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_ORDERS,
  SYSTEM_ERROR
} from '../constants/messages';
import { LOADING_HIDE_DELAY } from '../constants/values';

const getNumOrders = (orders: Order[]): number[] => {
  const numbers: number[] = orders.map((order: Order): number => {
    return order.NumPedido || 0;
  });
  return numbers;
};

/**
 * Epic to handle the refresh of the orders list.
 * @param action$ -> Epic handler.
 */
const ordersEpic = (action$: Observable<*>, store: ReduxStore): Observable<*> => (
  action$.ofType(REQUEST_ORDERS)
    .switchMap(() => {
      const { orders, user }: AppState = store.getState();
      const currentOrders = getNumOrders(orders);
      const request = getOrdersToDeliverRequest(user.username)
        .concatMap((response: FetchResponse) => {
          const { data } = response;
          const updatedOrders = data.data.map((order: Order) => {
            if (currentOrders.includes(order.NumPedido || 0)) {
              return orders.find((currentOrder: Order) => (
                currentOrder.NumPedido === order.NumPedido
              ));
            }
            return transmuter.toInprogressOrder(order);
          });

          return Observable.concat(
            Observable.of(initOrders(updatedOrders)),
            hideLoadingAction()
              .delay(LOADING_HIDE_DELAY)
          ).merge(Observable.of(updateStore()));
        })
        .catch((err) => {
          console.log(err); // eslint-disable-line
          const displayError$ = Observable.of(showToast(SYSTEM_ERROR, ERROR));
          return Observable.concat(
            displayError$,
            hideLoadingAction()
              .delay(LOADING_HIDE_DELAY)
          );
        })
        .startWith(showLoading(LOADING_ORDERS));

      return request;
    })
);

export default ordersEpic;
