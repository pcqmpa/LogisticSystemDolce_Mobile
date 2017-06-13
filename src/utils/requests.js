/**
 * Module with API request wrapped in an Observable.
 * @module src/shared/utils/requests
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';

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
export const authenticationRequest =
  (loginForm: LoginState): Observable<*> => (
    streams.ajaxRequest(callFetchUser(), {
      method: POST,
      body: JSON.stringify(loginForm)
    })
  );
