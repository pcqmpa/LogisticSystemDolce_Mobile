/**
 * Module with custom Observables.
 * @module src/utils/streams
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/concatMap';

// Constants.
import { GET } from '../constants/types';

// Types.
import type {
  AjaxRequest,
  FetchResponse
} from './app-types';

const ajaxRequest =
  ({ url, method = GET, options = {} }: AjaxRequest): Observable<*> => {
    const request = Observable.fromPromise(
      fetch(url, {
        method,
        ...options
      })
    ).concatMap((response: FetchResponse) => {
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

export default { ajaxRequest };
