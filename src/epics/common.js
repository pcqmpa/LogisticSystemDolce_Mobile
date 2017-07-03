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
import { hideLoading } from '../actions/common';
import { logoutUser } from '../actions/user';

export const hideLoadingAction = (): Observable<*> => (
  Observable.of(hideLoading())
    .delay(1500)
);

export const sessionExpired = (message: string): Observable<*> => (
  Observable.concat(
    Observable.of(logoutUser(message)),
    hideLoadingAction()
  )
);
