/**
 * Module with the storage epic.
 * @module src/epics/storage
 */
// Rxjs.
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';

// Actions.
import { push } from '../actions/navigation';
import {
  toggleLoading,
  showToast
} from '../actions/common';
