/**
 * Module with custom Observables.
 * @module src/utils/streams
 * @flow
 */
// React.
import { NativeModules } from 'react-native';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';

// Types.
import type {
  AjaxRequest,
  FetchResponse,
  ImageToBase64
} from './app-types';

// Constants.
import { GET } from '../constants/types';

const ajaxRequest =
  ({ url, method = GET, options = {} }: AjaxRequest): Observable<*> => {
    const request = Observable.fromPromise(
      fetch(url, {
        method,
        ...options
      })
    ).concatMap((response: Response) => {
      const mappedResponse = Observable.fromPromise(response.json())
        .map((data: any): FetchResponse => ({
          data,
          headers: response.headers,
          status: response.status,
          url: response.url
        }));
      return mappedResponse;
    });
    return request;
  };

const imageToBase64: ImageToBase64 = Observable
  .bindNodeCallback(NativeModules.RNImageToBase64.getBase64String);

export default {
  ajaxRequest,
  imageToBase64
};
