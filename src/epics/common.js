/**
 * Module with some common streams.
 * @module src/epics/common
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

// Actions.
import {
  showToast,
  hideLoading
} from '../actions/common';
import { logoutUser } from '../actions/user';

// Constants.
import { SESSION_EXPIRED } from '../constants/messages';
import { ERROR } from '../constants/types';

export const hideLoadingAction = (): Observable<*> => (
  Observable.of(hideLoading())
    .delay(1500)
);

export const sessionExpired = (): Observable<*> => (
  Observable.concat(
    Observable.of(logoutUser()),
    hideLoadingAction(),
    Observable.of(showToast(SESSION_EXPIRED, ERROR))
      .delay(200)
  )
);
