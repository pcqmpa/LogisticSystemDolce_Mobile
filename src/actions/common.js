/**
 * Module with loading specific actions.
 * @module src/actions/loading
 */
// Constants.
import {
  TOGGLE_LOADING
} from '../constants/actions';

/**
 * Action to toggle the display of the loading component.
 * @returns {Object} -> The action object.
 */
export const toggleLoading = () => ({ type: TOGGLE_LOADING });
