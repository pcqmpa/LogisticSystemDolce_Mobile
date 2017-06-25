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
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AppState,
  FetchResponse,
  ReduxStore
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';

// Actions.
import {
  showLoading,
  showToast
} from '../actions/common';
import { initOrders } from '../actions/orders';

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

/**
 * Epic to handle the refresh of the orders list.
 * @param action$ -> Epic handler.
 */
const ordersEpic = (action$: Observable<*>, store: ReduxStore): Observable<*> => (
  action$.ofType(REQUEST_ORDERS)
    .switchMap(() => {
      const { user }: AppState = store.getState();
      const request = getOrdersToDeliverRequest(user.username)
        .concatMap((response: FetchResponse) => {
          const { data } = response;
          return Observable.concat(
            Observable.of(initOrders(data.data)),
            hideLoadingAction()
              .delay(LOADING_HIDE_DELAY)
          );
        })
        .catch(() => {
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
