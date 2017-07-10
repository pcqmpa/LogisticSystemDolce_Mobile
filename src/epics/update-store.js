/**
 * Module with the update store epic that will update the app
 * storage based on the current state of the app.
 * @module src/epics/update-store.
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeMap';

// Types.
import type {
  AppState,
  ReduxStore
} from '../utils/app-types';

// Actions.
import {
  setStoreUpdated,
  showToast
} from '../actions/common';

// Utils.
import storage from '../utils/storage-services';

// Constants.
import { UPDATE_STORE } from '../constants/actions';
import { ERROR } from '../constants/colors';
import { UPDATE_STORAGE_ERROR } from '../constants/messages';

const updateStoreEpic$ =
  (action$: Observable<*>, store: ReduxStore): Observable<*> => {
    return action$.ofType(UPDATE_STORE)
      .mergeMap(() => {
        const { user, orders }: AppState = store.getState();
        return storage.saveUserData(user)
          .combineLatest(storage.saveOrders(orders))
          .map(() => {
            return setStoreUpdated();
          })
          .catch(() => (Observable.of(showToast(UPDATE_STORAGE_ERROR, ERROR))));
      });
  };

export default updateStoreEpic$;
