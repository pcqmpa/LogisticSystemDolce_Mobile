/**
 * Module with the not-delivered epic that notifies
 * when an order could not be delivered.
 * @module src/epics/not-delivered
 * @flow
 */
// React.
import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/switchMap';

// Types.
import type {
  AppState,
  FetchResponse,
  Order,
  OrderAction,
  ReduxStore
} from '../utils/app-types';

// Streams.
import { hideLoadingAction } from './common';

// Actions.
import {
  showLoading,
  showToast,
  updateStore
} from '../actions/common';
import { setOrderToNotDelivered } from '../actions/orders';
import { logoutUser } from '../actions/user';

// Utils.
import { notifyNotDeliveredOrder } from '../utils/requests';

// Constants.
import { NOTIFY_NOT_DELIVERED_ORDER } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOADING_SENDING,
  ORDER_NOT_DELIVERED_NOTIFIED,
  SESSION_EXPIRED,
  SYSTEM_ERROR
} from '../constants/messages';
import { UNAUTHORIZED } from '../constants/responses';
import { ORDER_DETAILS_PATH } from '../constants/screens';
import { TOAST_DISPLAY_DELAY } from '../constants/values';

const notDeliveredEpic$ = (action$: Observable<*>, store: ReduxStore) => {
  return action$.ofType(NOTIFY_NOT_DELIVERED_ORDER)
    .switchMap((action: OrderAction) => {
      const { orders, user }: AppState = store.getState();
      const { id, NumPedido, message }: Order = orders.find((order: Order) => {
        return order.orderId === action.orderId;
      }) || { pictures: {} };

      return notifyNotDeliveredOrder(NumPedido || 0, message || '', user.token || '')
        .concatMap(() => {
          return Observable.concat(
            Observable.of(
              setOrderToNotDelivered(id),
              updateStore(),
              replace(`${ORDER_DETAILS_PATH}/${(id || 0).toString()}`)
            ),
            hideLoadingAction(),
            Observable.of(showToast(ORDER_NOT_DELIVERED_NOTIFIED))
              .delay(TOAST_DISPLAY_DELAY)
          );
        })
        .catch((err: FetchResponse) => {
          console.log(err); // eslint-disable-line
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
        })
        .startWith(showLoading(LOADING_SENDING));
    });
};

export default notDeliveredEpic$;
