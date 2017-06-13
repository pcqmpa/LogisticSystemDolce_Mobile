/**
 * Module with the toast epic.
 * @module src/epics/toast
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

// Actions.
import { hideToast } from '../actions/common';

// Constants.
import { SHOW_TOAST } from '../constants/actions';
import { TOAST_HIDE_DELAY } from '../constants/values';

const toastEpic = (action$: Observable<*>): Observable<*> => (
  action$.ofType(SHOW_TOAST)
    .mergeMap(() => (
      Observable.of(hideToast())
        .delay(TOAST_HIDE_DELAY)
    ))
);

export default toastEpic;
