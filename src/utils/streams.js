/**
 * Module with custom Observables.
 * @module src/utils/streams
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

// Constants.
import { GET } from '../constants/types';

// Types.
import type { AjaxRequest } from './app-types';

const ajaxRequest =
  ({ url, method = GET, options = {} }: AjaxRequest): Observable<*> => (
    Observable.fromPromise(
      fetch(url, {
        method,
        ...options
      })
      .then(response => (response.json()))
    )
  );

export default { ajaxRequest };
