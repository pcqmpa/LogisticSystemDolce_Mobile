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
  ReduxStore,
  User
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';
import { uploadPictures$ } from './order-delivery';

// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import { initOrders } from '../actions/orders';
import { logoutUser } from '../actions/user';

// Libs.
import transmuter from '../libs/transmuter';

// Utils.
import {
  deliverOrders,
  getOrdersToDeliverRequest
} from '../utils/requests';

// Constants.
import { SYNC_ORDERS } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_ORDERS,
  NO_ORDERS_TO_DELIVER,
  NO_ORDERS_WHERE_UPDATED,
  ORDERS_SYNC,
  ORDERS_UPDATED,
  SYSTEM_ERROR
} from '../constants/messages';
import * as responses from '../constants/responses';
import { OrderStateEnum } from '../constants/types';
import {
  LOADING_HIDE_DELAY,
  TOAST_DISPLAY_DELAY
} from '../constants/values';

const getOrderNums = (orders: Order[]): number[] => {
  const ids: number[] = orders.map((order: Order): string => {
    return order.NumPedido || '';
  });
  return ids;
};

const $updateOrders = (orders: Order[], user: User, message: string) => {
  return (): Observable<*> => {
    let toastMessage = message;
    const currentOrders: number[] = getOrderNums(orders);
    const request = getOrdersToDeliverRequest(user.username)
      .concatMap((response: FetchResponse) => {
        const { data } = response;
        const ordersUpdated: Order[] = transmuter.toInProgressOrders(data.data);

        if (!ordersUpdated.length) {
          toastMessage = NO_ORDERS_TO_DELIVER;
        }
        const ordersWhereUpdated: boolean = ordersUpdated.some((order: Order): boolean => {
          return !currentOrders.includes(order.NumPedido);
        });

        if (!ordersWhereUpdated) {
          toastMessage = NO_ORDERS_WHERE_UPDATED;
        }

        return Observable.concat(
          Observable.of(initOrders(ordersUpdated)),
          hideLoadingAction()
            .delay(LOADING_HIDE_DELAY),
          Observable.of(showToast(toastMessage))
        ).merge(Observable.of(updateStore()));
      })
      .catch((/* err */) => {
        // console.log(err); // eslint-disable-line
        const displayError$ = Observable.of(showToast(SYSTEM_ERROR, ERROR));
        return Observable.concat(
          displayError$,
          hideLoadingAction()
            .delay(LOADING_HIDE_DELAY)
        );
      })
      .startWith(showLoading(LOADING_ORDERS));

    return request;
  };
};

const $syncOrders = (orders: Order[], user: User): Observable<*> => {
  return Observable.from(orders)
    .mergeMap((order: Order): Observable<*> => {
      return uploadPictures$(order, user)
        .map((payload: [FetchResponse, FetchResponse]): DeliverOrderData => {
          const [packageResponse, codeResponse] = payload;

          if (
            packageResponse.status === responses.UNAUTHORIZED ||
            packageResponse.status === responses.ERROR
          ) {
            throw packageResponse;
          }

          const orderData: DeliverOrderData = {
            numOrder: order.NumPedido,
            urlCode: codeResponse.data.storedPath,
            urlPackage: packageResponse.data.storedPath,
            orderType: order.StrTipoEmpaque || ''
          };

          return orderData;
        });
    })
    .reduce((ordersToDeliver: DeliverOrderData[], orderToDeliver: DeliverOrderData): DeliverOrderData[] => {
      return [
        ...ordersToDeliver,
        orderToDeliver
      ];
    }, [])
    .concatMap((ordersToDeliver: DeliverOrderData[]): Observable<*> => {
      return deliverOrders(user.username || '', ordersToDeliver, user.token || '');
    })
    .catch((err: FetchResponse) => {
      const data: DeliveryResponse = err.data;

      switch (err.status) {
      case responses.UNAUTHORIZED:
        return Observable.of(logoutUser(data.message));
      default:
        return Observable.concat(
          hideLoadingAction(),
          Observable.of(showToast(SYSTEM_ERROR, ERROR))
            .delay(TOAST_DISPLAY_DELAY)
        );
      }
    });
};

/**
 * Epic to handle the refresh of the orders list.
 * @param action$ -> Epic handler.
 */
const ordersEpic = (action$: Observable<*>, store: ReduxStore): Observable<*> => (
  action$.ofType(SYNC_ORDERS)
    .switchMap(() => {
      const { orders = [], user }: AppState = store.getState();

      const unsyncedOrders: Order[] = orders.filter((order: Order) => {
        return (
          !order.synced && !order.Entregado && order.state === OrderStateEnum.DELIVERED
        );
      });

      if (unsyncedOrders.length) {
        return $syncOrders(unsyncedOrders, user)
          .concatMap($updateOrders(orders, user, ORDERS_SYNC(unsyncedOrders.length)))
          .startWith(showLoading(LOADING_ORDERS));
      }

      return $updateOrders(orders, user, ORDERS_UPDATED)()
        .startWith(showLoading(LOADING_ORDERS));
    })
);

export default ordersEpic;
