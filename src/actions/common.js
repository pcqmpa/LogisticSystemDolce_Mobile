/**
 * Module with loading specific actions.
 * @module src/actions/loading
 */
// Constants.
import {
  TOGGLE_LOADING,

  SHOW_TOAST,
  HIDE_TOAST,

  UPDATE_APP_SYNCED,

  INIT_STORE
} from '../constants/actions';

// Loading.
/**
 * Action to toggle the display of the loading component.
 * @returns {Object} -> The action object.
 */
export const toggleLoading = () => ({ type: TOGGLE_LOADING });

// Toast.

/**
 * Action to display a toast message.
 * @param {String} message -> The message to display.
 * @returns {Object} -> The action object.
 */
export const showToast = message => ({ type: SHOW_TOAST, message });

/**
 * Action to hide any current toast.
 * @returns {Object} -> The action object.
 */
export const hideToast = () => ({ type: HIDE_TOAST });

// App Synchronization.

/**
 * Action to update the current state of synchronization.
 * @param {Bool} synced -> The synchronization flag.
 * @returns {Object} -> The action object.
 */
export const updateAppScynced = synced => ({
  type: UPDATE_APP_SYNCED,
  synced
});

/**
 * Action to initialize the store data from the storage.
 * @returns {Object} -> The action object.
 */
export const initStore = () => ({
  type: INIT_STORE
});
