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
  FetchResponse,
  LoginState,
  Order,
  PictureDataObject
} from './app-types';

// Utils.
import streams from './streams';

// Enpoints.
import {
  callDeliverOrder,
  callDeliverOrders,
  callFetchUser,
  callGetOrdersToDeliver,
  callNotifyNotDeliveredOrder,
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
  // const request = Observable.ajax.post(callFetchUser(), loginForm);
  const request = streams.ajaxRequest({
    body: JSON.stringify(loginForm),
    headers: {
      'content-type': 'application/json'
    },
    method: POST,
    url: callFetchUser()
  });
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
  (orderData: DeliverOrderData, token?: string | null): Observable<FetchResponse> => {
    const request = streams.ajaxRequest({
      body: JSON.stringify(orderData),
      headers: {
        'content-type': 'application/json',
        ismobile: 'true',
        token
      },
      method: POST,
      url: callDeliverOrder()
    });
    return request;
  };

/**
 * Creates a request to deliver a list of orders.
 * @param username -> The username.
 * @param orders -> The data to deliver the order.
 * @param token -> The user session token.
 * @returns The deliver request.
 */
export const deliverOrders =
  (username: string, orders: DeliverOrderData[], token: string): Observable<FetchResponse> => {
    const request = streams.ajaxRequest({
      body: JSON.stringify({ username, orders }),
      headers: {
        'content-type': 'application/json',
        ismobile: 'true',
        token
      },
      method: POST,
      url: callDeliverOrders()
    });
    return request;
  };

/**
 * Creates a request to notify when an order could not be delivered.
 * @param numOrder -> The number of the order.
 * @param message -> The message of the notification.
 */
export const notifyNotDeliveredOrder =
  (numOrder: number, message: string, token: string): Observable<FetchResponse> => {
    const body = { message, numOrder };
    const headers = {
      'content-type': 'application/json',
      ismobile: 'true',
      token
    };
    const request = streams.ajaxRequest({
      body: JSON.stringify(body),
      headers,
      method: POST,
      url: callNotifyNotDeliveredOrder()
    });
    return request;
  };

/**
 * Creates a request to upload a picture to the server.
 * @param pictureUri -> The picture location.
 * @param token -> The user session token.
 * @returns The upload request.
 */
export const uploadPicture =
  (pictureUri: string, token: string | null): Observable<*> => {
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

    const request$ = streams.ajaxRequest({
      body: formData,
      headers,
      method: POST,
      url: callSavePicture()
    });
    return request$;
  };
