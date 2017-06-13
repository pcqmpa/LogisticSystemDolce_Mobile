/**
 * Module with sub epic auth validation.
 * @module src/epics/auth-validation
 * @flow
 */
// React - Redux.
import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';

// Types.
import type { NotifyErrorOptions } from '../utils/app-types';

// Actions.
import { showToast } from '../actions/common';

// Constants.
import { ERROR } from '../constants/colors';
import {
  BAD_ERROR_SOURCE,
  SESSION_ACTIVE,
  SESSION_EXPIRED,
  SYSTEM_ERROR
} from '../constants/messages';
import { LOGIN, ORDERS } from '../constants/screens';
import { AUTH, STORAGE } from '../constants/types';
import {
  REDIRECT_DELAY,
  TOAST_DISPLAY_DELAY
} from '../constants/values';


const sessionExpired$ = () => (
  Observable.concat(
    Observable.of(showToast(SESSION_EXPIRED, ERROR))
      .delay(TOAST_DISPLAY_DELAY),
    Observable.of(replace(LOGIN))
      .delay(REDIRECT_DELAY)
  )
);

const storageErrors$ = (errorType: string, options: NotifyErrorOptions): Observable<*> => {
  switch (errorType) {
  case AUTH:
    if (options.location === LOGIN) {
      return Observable.concat(
        Observable.of(showToast(SESSION_ACTIVE, ERROR))
          .delay(TOAST_DISPLAY_DELAY),
        Observable.of(replace(ORDERS))
          .delay(REDIRECT_DELAY)
      );
    }

    return sessionExpired$();
  default:
    return Observable.of(showToast(SYSTEM_ERROR, ERROR));
  }
};

const notifyError$ =
  (from: string, errorType: string, options: NotifyErrorOptions): Observable<*> => {
    switch (from) {
    case STORAGE :
      return storageErrors$(errorType, options);
    default:
      throw new Error(BAD_ERROR_SOURCE);
    }
  };

export default notifyError$;
