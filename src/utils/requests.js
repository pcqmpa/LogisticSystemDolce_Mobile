/**
 * Module with API request wrapped in an Observable.
 * @module src/shared/utils/requests
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

// Utils.
import streams from './streams';

// Enpoints.
import {
  callFetchUser
} from './endpoints';

// Constants.
import { POST } from '../constants/types';

// Types.
import type { LoginState } from './app-types';

/**
 * Creates an Observable with the auth request.
 * @param {Object} loginForm -> The login form data.
 * @returns {Observable} -> With the auth request.
 */
export const authenticationRequest = (loginForm: LoginState): Observable<*> => {
    // streams.ajaxRequest({
    //   url: callFetchUser(),
    //   method: POST,
    //   options: {
    //     body: JSON.stringify(loginForm)
    //   }
    // })
  const request = Observable.ajax.post(callFetchUser(), loginForm);
  return request;
};
