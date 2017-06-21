/**
 * Module with the logout epic.
 * @module src/epics/logout
 * @flow
 */
// Redux - Router.
import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

// Observables.
import { hideLoadingAction } from './common';

// Actions.
import { showLoading, showToast } from '../actions/common';

// Utils.
import storage from '../utils/storage-services';

// Constants.
import { LOGOUT_USER } from '../constants/actions';
import { ERROR } from '../constants/colors';
import {
  LOGOUT_SUCCESS,
  SYSTEM_ERROR
} from '../constants/messages';
import { LOGIN } from '../constants/screens';
import {
  REDIRECT_DELAY,
  TOAST_DISPLAY_DELAY
} from '../constants/values';

const logoutEpic = (action$: Observable<*>): Observable<*> => (
  action$.ofType(LOGOUT_USER)
    .switchMap(() => (
      storage.removeUserData()
        .concatMap(() => (storage.removeOrders()))
        .concatMap(() => (
          Observable.concat(
            Observable.of(replace(LOGIN))
              .delay(REDIRECT_DELAY),
            hideLoadingAction(),
            Observable.of(showToast(LOGOUT_SUCCESS))
              .delay(TOAST_DISPLAY_DELAY)
          )
        ))
        .catch(() => (
          Observable.of(showToast(SYSTEM_ERROR, ERROR))
            .delay(TOAST_DISPLAY_DELAY)
        ))
        .startWith(showLoading())
    ))
);

export default logoutEpic;
