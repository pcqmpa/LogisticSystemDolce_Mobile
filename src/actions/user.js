/**
 * Module with the user redux actions.
 * @module src/actions/user
 */
// Constants.
import {
  SET_USER_DATA,
  CLEAR_USER_DATA
} from '../constants/actions';

/**
 * Action to set the user data.
 * @param {Object} data -> The user data.
 * @returns {Object} -> The action object.
 */
export const setUserData = user => ({
  type: SET_USER_DATA,
  user
});

/**
 * Action to clear the current user data.
 * @returns {Object} -> The action object.
 */
export const clearUserData = () => ({
  type: CLEAR_USER_DATA
});
