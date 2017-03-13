/**
 * Module with custom Observables.
 * @module src/utils/streams
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

// Constants.
import { GET } from '../constants/types';

const ajaxRequest = ({ url, method = GET, options = {} }) => (
  Observable.fromPromise(
    fetch(url, {
      method,
      ...options
    })
  )
);

export default { ajaxRequest };
