/**
 * Module with the order delivery epic, tha will
 * delivery of a particular order to the server.
 * @module src/epics/picture-delivery
 * @flow
 */
// React.
import { NetInfo } from 'react-native';
import { goBack } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AjaxResponse,
  AppState,
  DeliverOrderAction,
  DeliverOrderData,
  DeliveryResponse,
  FetchResponse,
  Order,
  ReduxStore,
  User
} from '../utils/app-types';

// Requests.
import {
  deliverOrder,
  getOrdersToDeliverRequest,
  uploadPicture
} from '../utils/requests';

// Observables.
import { hideLoadingAction } from './common';

// Libs.
import transmuter from '../libs/transmuter';

// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import {
  deliverOrderPartially,
  deliverOrderSucceded,
  initOrders
} from '../actions/orders';
import { logoutUser } from '../actions/user';

// Constants.
import { DELIVER_ORDER } from '../constants/actions';
import { ERROR, GREY_DOVE } from '../constants/colors';
import {
  SESSION_EXPIRED,
  SYSTEM_ERROR,
  ORDER_PARTIALLY_DELIVERED
} from '../constants/messages';
import { UNAUTHORIZED } from '../constants/responses';
import { TOAST_DISPLAY_DELAY } from '../constants/values';

export const deliverOrder$ = (order: Order, user: User): Observable<*> => {
  const uploadPackagePicture$ = uploadPicture(order.pictures.package, user.token);
  const uploadCodePicture$ = uploadPicture(order.pictures.code, user.token);

  return uploadPackagePicture$
    .combineLatest(uploadCodePicture$)
    .concatMap((payload: [FetchResponse, FetchResponse]): Observable<*> => {
      const [packageResponse, codeResponse] = payload;
      const orderData: DeliverOrderData = {
        numOrder: order.NumPedido,
        urlCode: codeResponse.data.storedPath,
        urlPackage: packageResponse.data.storedPath
      };

      return deliverOrder(orderData, user.token);
    });
};

const orderDeliveryEpic$ = (action$: Observable<*>, store: ReduxStore): Observable<*> => {
  return action$.ofType(DELIVER_ORDER)
    .switchMap((action: DeliverOrderAction) => {
      const { order } = action;
      const { user }: AppState = store.getState();
      return Observable.fromPromise(NetInfo.isConnected.fetch())
        .concatMap((isConnected) => {
          if (!isConnected) {
            return Observable.concat(
              Observable.of(deliverOrderPartially(action.order.NumPedido)),
              hideLoadingAction(),
              Observable.of(showToast(ORDER_PARTIALLY_DELIVERED, GREY_DOVE))
                .delay(TOAST_DISPLAY_DELAY)
            );
          }

          return deliverOrder$(order, user)
            .concatMap((orderResponse: FetchResponse) => {
              const data: DeliveryResponse = orderResponse.data;

              if (orderResponse.status === UNAUTHORIZED) {
                return Observable.of(logoutUser(data.message));
              }

              return getOrdersToDeliverRequest(user.username)
                .concatMap((ordersResponse: FetchResponse) => {
                  const newOrders: Order[] = transmuter
                    .toInProgressOrders(ordersResponse.data.data);

                  return Observable.concat(
                    Observable.of(
                      goBack(),
                      initOrders(newOrders),
                      deliverOrderSucceded(order.NumPedido),
                      updateStore()
                    ),
                    hideLoadingAction(),
                    Observable.of(showToast(data.message))
                      .delay(TOAST_DISPLAY_DELAY)
                  );
                });
            })
            .catch((err: AjaxResponse) => {
              console.log(err);
              switch (err.status) {
              case UNAUTHORIZED:
                return Observable.of(logoutUser(SESSION_EXPIRED));
              default:
                return Observable.concat(
                  hideLoadingAction(),
                  Observable.of(showToast(SYSTEM_ERROR, ERROR))
                    .delay(TOAST_DISPLAY_DELAY)
                );
              }
            });
        })
        .startWith(showLoading());
    });
};

export default orderDeliveryEpic$;
