/**
 * Module with API request wrapped in an Observable.
 * @module src/shared/utils/requests
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

// Types.
import type {
  AjaxHeaders,
  DeliverOrderData,
  LoginState
} from './app-types';

// Utils.
import streams from './streams';

// Enpoints.
import {
  callDeliverOrder,
  callFetchUser,
  callGetOrdersToDeliver,
  callSavePicture
} from './endpoints';

// Constants.
import { GET, POST } from '../constants/types';

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
    method: GET,
    url: callGetOrdersToDeliver(username)
  });
  return request;
};

/**
 * Creates a request to deliver an order.
 * @param orderData -> The data to deliver the order.
 * @param token -> The user session token.
 * @returns The deliver request.
 */
export const deliverOrder =
  (orderData: DeliverOrderData, token?: string | null): Observable<*> => {
    const request = Observable.ajax.post(
      callDeliverOrder(),
      orderData,
      { ismobile: 'true', token }
    );
    return request;
  };

/**
 * Creates a request to upload a picture to the server.
 * @param picture -> The picture base64 string.
 * @param token -> The user session token.
 * @returns The upload request.
 */
export const uploadPicture =
  (picture?: string | null, token?: string | null): Observable<*> => {
    const headers: AjaxHeaders = {
      'Content-Type': 'multipart/form-data',
      ismobile: 'true',
      token
    };

    const formData = new FormData();
    formData.append('picture', JSON.stringify({
      data: picture
    }));

    const request = streams.ajaxRequest({
      method: POST,
      options: {
        body: formData,
        headers
      },
      url: callSavePicture()
    });
    return request;
  };
