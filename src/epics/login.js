// TODO: see if this can be refactor.
/**
 * Module with the login epic.
 * @module src/epics/login.
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';

// Actions.
import { push } from '../actions/navigation';
import {
  toggleLoading,
  showToast
} from '../actions/common';
import {
  loginSuccess,
  loginFailed
} from '../actions/login';
import { setUserData } from '../actions/user';
import { setOrders } from '../actions/orders';

// Lib.
import serializer from '../lib/serializer';

// Utils.
import { services, storageServices } from '../utils/';

// Constants.
import { LOGIN_REQUEST } from '../constants/actions';
import { ORDERS } from '../constants/scenes';
import { WELCOME } from '../constants/messages';

const loginSuccessEpic = (payload) => {
  const { user, orders } = payload;
  const loggedUser = serializer.toLoggedUser(user);
  const onProgressOrders = serializer.toOnProgressOrders(orders);

  // Init storage data.
  storageServices.saveUserData(loggedUser);
  storageServices.saveCurrentOrders(onProgressOrders);

  return Observable.merge(
    Observable.of(
      loginSuccess(),
      setUserData(loggedUser),
      setOrders(onProgressOrders)
    ),
    Observable.of(push(ORDERS)),
    Observable.of(toggleLoading())
      .delay(500),
    Observable.of(showToast(WELCOME))
      .delay(800)
  );
};

const loginFailEpic = (err) => {
  const { message } = err;
  return Observable.of(
    loginFailed(err),
    toggleLoading(),
    showToast(message)
  );
};

/**
 * Epic to handle the user login flow.
 * @param {Object} action$ -> Redux action wrapped.
 * @returns {Observable} -> The epic definition.
 */
const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST)
    .mergeMap(action => (
      Observable.ajax
        .getJSON(services.callFetchUser(action.payload))
        .concatMap(payload => (loginSuccessEpic(payload)))
        .catch(err => (loginFailEpic(err)))
        .startWith(toggleLoading())
    ));

export default loginEpic;
