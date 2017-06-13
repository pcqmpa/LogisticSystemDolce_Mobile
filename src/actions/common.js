/**
 * Module with common actions.
 * @module src/actions/common
 * @flow
 */
// Constants.
import {
  CLEAR_CURRENT_SCREEN_DATA,
  HIDE_LOADING,
  HIDE_TOAST,
  INIT_CURRENT_SCREEN,
  SET_ORDER,
  SET_SCREEN_DEFAULT_STATE,
  SET_SCREEN_LOADED,
  SHOW_LOADING,
  SHOW_TOAST
} from '../constants/actions';
import { BRAND_DARK } from '../constants/colors';

// Types.
import type {
  Action,
  LoadinAction,
  OrderDetailsAction,
  ToastAction
} from '../utils/app-types';

/**
 * Action to display a toast.
 * @param {String} message -> The message to display.
 * @param {String} toastType -> The type of the toast.
 * @returns {Object} -> The action object.
 */
export const showToast =
  (message: string = '', toastType: string = BRAND_DARK): ToastAction => ({
    type: SHOW_TOAST,
    message,
    toastType
  });

/**
 * Action to hide the current displayed toast.
 * @returns {Object} -> The action object.
 */
export const hideToast = (): Action => ({
  type: HIDE_TOAST
});

/**
 * Action to display the loading view.
 * @param {String} label -> A label to display in the view.
 * @returns {Object} -> The action object.
 */
export const showLoading = (label: string = 'Cargando...'): LoadinAction => ({
  type: SHOW_LOADING,
  label
});

/**
 * Action to hide the loading view.
 * @returns {Object} -> The action object.
 */
export const hideLoading = (): Action => ({
  type: HIDE_LOADING
});

/**
 * Action to pre-configure the current screen.
 * @returns {Object} -> The action object.
 */
export const initCurrentScreen = (): Action => ({
  type: INIT_CURRENT_SCREEN
});

/**
 * Action to clear the current screen data.
 * @returns {Object} -> The action object.
 */
export const clearCurrentScreenData = (): Action => ({
  type: CLEAR_CURRENT_SCREEN_DATA
});

/**
 * Action that sets the screen state to loaded.
 * @returns {Object} -> The action object.
 */
export const setScreenLoaded = (): Action => ({
  type: SET_SCREEN_LOADED
});

/**
 * Action to set the default state of a screen.
 * @returns {Object} -> The action object.
 */
export const setScreenDefaultState = (): Action => ({
  type: SET_SCREEN_DEFAULT_STATE
});

/**
 * Action to set the order to display on the details screen.
 * @param {String} orderId -> The if of the order.
 * @returns {Object} -> The action object.
 */
export const setOrder = (orderId: string): OrderDetailsAction => ({
  type: SET_ORDER,
  orderId
});
