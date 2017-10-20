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
  DeliverOrderData,
  DeliveryResponse,
  FetchResponse,
  Order,
  ReduxStore,
  User
} from '../utils/app-types';

// Requests.
import {
  deliverOrders,
  getOrdersToDeliverRequest
} from '../utils/requests';

// Observables.
import { hideLoadingAction } from './common';
import { uploadPictures$ } from './order-delivery';

// Libs.
import transmuter from '../libs/transmuter';

// Actions.
import {
  showLoading,
  showToast,
  updateLoadingLabel,
  updateStore
} from '../actions/common';
import { initOrders, syncedOrders } from '../actions/orders';
import { logoutUser } from '../actions/user';

// Constants.
import { INIT_NET_WATCHER } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_SYNC,
  ORDERS_SYNCED,
  SYSTEM_ERROR
} from '../constants/messages';
import * as responses from '../constants/responses';
import { OrderStateEnum, NONE_NET } from '../constants/types';
import {
  LOADING_HIDE_DELAY,
  SYNC_DELAY,
  TOAST_DISPLAY_DELAY
} from '../constants/values';

const syncOrders$ = (orders: Order[], user: User) => {
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
    .concatMap(() => {
      return getOrdersToDeliverRequest(user.username);
    })
    .concatMap((ordersResponse: FetchResponse) => {
      const newOrders: Order[] = transmuter
        .toInProgressOrders(ordersResponse.data.data);
      const orderIds: string[] = orders.map((order: Order): string => {
        return order.id || '';
      });

      return Observable.concat(
        Observable.of(updateLoadingLabel(`Se sincronizaron ${orders.length + 1} pedidos.`))
          .delay(LOADING_HIDE_DELAY),
        Observable.of(initOrders(newOrders)),
        Observable.of(syncedOrders(orderIds)),
        Observable.of(updateStore()),
        hideLoadingAction(),
        Observable.of(showToast(ORDERS_SYNCED))
          .delay(TOAST_DISPLAY_DELAY)
      );
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
              return (
                !order.synced && !order.Entregado && order.state === OrderStateEnum.DELIVERED
              );
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
