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
  callFetchUser,
  callGetOrdersToDeliver
} from './endpoints';

// Constants.
import { GET } from '../constants/types';

// Types.
import type { LoginState } from './app-types';

/**
 * Creates an Observable with the auth request.
 * @param loginForm -> The login form data.
 * @returns The auth request.
 */
export const authenticationRequest = (loginForm: LoginState): Observable<*> => {
  const request = Observable.ajax.post(callFetchUser(), loginForm);
  return request;
};

/**
 * Creates an Observable with the get orders to deliver request.
 * @param username -> The username.
 * @returns Get orders to deliver request.
 */
export const getOrdersToDeliverRequest = (username: string = ''): Observable<*> => {
  const request = streams.ajaxRequest({
    url: callGetOrdersToDeliver(username),
    method: GET
  });
  return request;
};
