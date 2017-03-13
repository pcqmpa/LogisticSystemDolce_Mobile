/**
 * Module with the toast epic.
 * @module src/epics/toast.
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';

// Actions.
import { hideToast } from '../actions/common';

// Constants.
import { SHOW_TOAST } from '../constants/actions';

/**
 * Epic to handle the toast display.
 * @param {Object} action$ -> Redux action wrapped.
 * @returns {Symbol.Observable} -> The epic definition.
 */
const toastEpic = action$ =>
  action$.ofType(SHOW_TOAST)
    .concatMap(() => (
      Observable.of(hideToast())
        .delay(3000)
    ));

export default toastEpic;
