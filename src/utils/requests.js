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
  AjaxResponse,
  DeliverOrderData,
  LoginState,
  PictureDataObject
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
import { GET } from '../constants/types';

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
  (orderData: DeliverOrderData, token?: string | null): Observable<AjaxResponse> => {
    const request = Observable.ajax.post(
      callDeliverOrder(),
      orderData,
      { ismobile: 'true', token }
    );
    return request;
  };

/**
 * Creates a request to upload a picture to the server.
 * @param pictureUri -> The picture location.
 * @param token -> The user session token.
 * @returns The upload request.
 */
export const uploadPicture =
  (pictureUri?: string | null, token?: string | null): Observable<*> => {
    const headers: AjaxHeaders = {
      'Content-Type': 'multipart/form-data',
      ismobile: 'true',
      token
    };

    const picture: PictureDataObject = {
      name: 'picture.jpg',
      type: 'image/jpeg',
      uri: pictureUri
    };

    const formData = new FormData();
    // $FlowFixMe
    formData.append('picture', picture);

    const request$ = Observable.ajax.post(
      callSavePicture(),
      formData,
      headers
    );
    return request$;
  };
