/**
 * Module with user actions.
 * @module src/actions/user
 * @flow
 */
// Constants.
import {
  AUTH_USER,
  LOGOUT_USER
} from '../constants/actions';

// Types.
import type {
  Action,
  LogoutAction,
  User,
  UserAction
} from '../utils/app-types';

/**
 * Action to initialize the user data.
 * @param {Object} data -> The user data.
 * @returns {Object} -> The action object.
 */
export const authUser = (data: User): UserAction => ({
  type: AUTH_USER,
  data
});

/**
 * Action to clear the user data when logout.
 * @param {String} message -> Message to display after logout.
 * @returns {Object} -> The action object.
 */
export const logoutUser = (message: string): LogoutAction => ({
  type: LOGOUT_USER,
  message
});
