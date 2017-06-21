/**
 * Module with the authentication epic.
 * @module src/shared/epics/authentication.
 * @flow
 */
// React - Redux.
import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

// Types.
import type {
  AjaxResponse,
  AuthResponse,
  ReduxStore,
  User
} from '../utils/app-types';

// Requests.
import {
  authenticationRequest
} from '../utils/requests';

// Observables.
import { hideLoadingAction } from './common';

// Actions.
import {
  showToast,
  showLoading
} from '../actions/common';
import { clearLoginForm } from '../actions/login-form';
import { initOrders } from '../actions/orders';
import { authUser } from '../actions/user';

// Libs.
import transmuter from '../libs/transmuter';

// Utils.
import storage from '../utils/storage-services';

// Constants.
import { REQUEST_LOGIN } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from '../constants/messages';
import { ORDERS } from '../constants/screens';
import { TOAST_DISPLAY_DELAY } from '../constants/values';

const authenticationSucceed = ({ response }: AjaxResponse): Observable<any> => {
  const { user, orders, token }: AuthResponse = response;
  const mappedOrders = transmuter.toInProgressOrders(orders);
  const userData: User = {
    ...user,
    token
  };

  return storage.saveUserData(userData)
    .concatMap(() => (storage.saveOrders(mappedOrders)))
    .concatMap(() => (
      Observable.concat(
        Observable.of(
          authUser(user),
          initOrders(mappedOrders),
          clearLoginForm(),
          replace(ORDERS)
        ),
        hideLoadingAction(),
        Observable.of(showToast(AUTHENTICATION_SUCCESS))
          .delay(TOAST_DISPLAY_DELAY),
      ).catch(err => (
        Observable.of(showToast(err, ERROR))
          .delay(TOAST_DISPLAY_DELAY)
      ))
    ));
};

const authenticationFailed = (): Observable<*> => {
  const failureHandler = Observable.concat(
    Observable.of(clearLoginForm()),
    hideLoadingAction(),
    Observable.of(showToast(AUTHENTICATION_ERROR, ERROR))
      .delay(TOAST_DISPLAY_DELAY),
  );
  return failureHandler;
};

const authenticationEpic = (action$: Observable<*>, store: ReduxStore) => (
  action$.ofType(REQUEST_LOGIN)
    .mergeMap(() => {
      const { loginForm } = store.getState();

      return authenticationRequest(loginForm)
        .concatMap(authenticationSucceed)
        .catch(authenticationFailed)
        .startWith(showLoading());
    })
);

export default authenticationEpic;
