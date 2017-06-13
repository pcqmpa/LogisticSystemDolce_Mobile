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
 * @returns {Object} -> The action object.
 */
export const logoutUser = (): Action => ({
  type: LOGOUT_USER
});
