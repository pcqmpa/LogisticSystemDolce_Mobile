/**
 * Module with custom Observables.
 * @module src/utils/streams
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';

// Types.
import type {
  AjaxRequest,
  FetchResponse
} from './app-types';

// Constants.
import { GET } from '../constants/types';

const ajaxRequest =
  ({ url, method = GET, body, headers }: AjaxRequest): Observable<*> => {
    const params: AjaxRequest = { method };

    if (body) { params.body = body; }
    if (headers) { params.headers = headers; }

    const request = Observable.fromPromise(
      fetch(url, params)
    ).concatMap((response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        const mappedResponse = Observable.fromPromise(response.json())
          .map((data: any): FetchResponse => ({
            data,
            headers: response.headers,
            status: response.status,
            url: response.url
          }));
        return mappedResponse;
      }

      const error = new Error(response);
      throw error;
    });
    return request;
  };

export default {
  ajaxRequest
};
