/**
 * Module with the net watcher epic that handles
 * the sync of the orders.
 * @module src/epics/net-watcher
 * @flow
 */
// React.
import { NetInfo } from 'react-native';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AppState,
  DeliveryResponse,
  Order,
  ReduxStore,
  User
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';
import { deliverOrder$ } from './order-delivery';

// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import { logoutUser } from '../actions/user';

// Constants.
import { INIT_NET_WATCHER } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_SYNC,
  ORDERS_SYNCED,
  SYSTEM_ERROR
} from '../constants/messages';
import { UNAUTHORIZED } from '../constants/responses';
import { NONE_NET } from '../constants/types';
import {
  SYNC_DELAY,
  TOAST_DISPLAY_DELAY
} from '../constants/values';

const syncOrders$ = (orders: Order[], user: User) => {
  return Observable.from(orders)
    .mergeMap((order: Order) => {
      return deliverOrder$(order, user);
    })
    .reduce((response: any, orderResponse: any) => {
      if (orderResponse.status === UNAUTHORIZED) {
        throw orderResponse;
      }

      return orderResponse;
    })
    .concatMap(() => {
      return Observable.concat(
        Observable.of(updateStore()),
        hideLoadingAction(),
        Observable.of(showToast(ORDERS_SYNCED))
          .delay(TOAST_DISPLAY_DELAY)
      );
    })
    .catch((err: any) => {
      const data: DeliveryResponse = err.response;

      switch (err.status) {
      case UNAUTHORIZED:
        return Observable.of(logoutUser(data.message));
      default:
        return Observable.concat(
          hideLoadingAction(),
          Observable.of(showToast(SYSTEM_ERROR, ERROR))
            .delay(TOAST_DISPLAY_DELAY)
        );
      }
    })
    .startWith(showLoading(LOADING_SYNC));
};

const netWatcherEpic$ = (action$: Observable<*>, store: ReduxStore): Observable<*> => {
  return action$.ofType(INIT_NET_WATCHER)
    .mergeMap(() => {
      const netInfoEvent$ = Observable.fromEvent(NetInfo, 'change');
      return netInfoEvent$
        .switchMap((reach: any) => {
          if (reach !== NONE_NET) {
            const { orders, user }: AppState = store.getState();

            const unsyncedOrders: Order[] = orders.filter((order: Order) => {
              return (!order.synced && !order.Entregado && order.retrieved);
            });
            return (unsyncedOrders.length)
              ? syncOrders$(unsyncedOrders, user).delay(SYNC_DELAY)
              : Observable.empty();
          }

          return Observable.empty();
        });
    });
};

export default netWatcherEpic$;
