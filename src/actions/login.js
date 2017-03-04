/**
 * Module with the login redux actions.
 * @module src/actions/login
 */
// Constants.
import {
  UPDATE_USERNAME_INPUT,
  UPDATE_PASSWORD_INPUT,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,

  RESET_LOG_FAILED
} from '../constants/actions';

/**
 * Action to update the username input.
 * @param {String} username -> The input value.
 * @returns {Object} -> The action.
 */
export const updateUsernameInput = username => ({
  type: UPDATE_USERNAME_INPUT,
  username
});

/**
 * Action to update the password input.
 * @param {String} password -> The input value.
 * @returns {Object} -> The action.
 */
export const updatePasswordInput = password => ({
  type: UPDATE_PASSWORD_INPUT,
  password
});

/**
 * Action to request the login of a user.
 * @param {Object} payload -> The user data.
 * @returns {Object} -> The action.
 */
export const requestLogin = payload => ({ type: LOGIN_REQUEST, payload });

/**
 * Action executed when the user login is succeded.
 * @param {Object} user -> The user data.
 * @returns {Object} -> The action.
 */
export const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });

/**
 * Action executed when the user login failed.
 * @param {Object} err -> The error message.
 * @returns {Object} -> The action.
 */
export const loginFailed = err => ({ type: LOGIN_FAILED, err });

/**
 * Action to request the logout of a user.
 * @returns {Object} -> The action.
 */
export const requestLogout = () => ({ type: LOGOUT_REQUEST });

/**
 * Action executed when the user logout succeded.
 * @returns {Object} -> The action.
 */
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

/**
 * Action executed when the user logout failed.
 * @param {Object} err -> The error message.
 * @returns {Object} -> The action.
 */
export const logoutFailed = err => ({ type: LOGOUT_FAILED, err });

/**
 * Action to reset the failed state of the login reducer.
 * @returns {Object} -> The action.
 */
export const resetLogFailed = () => ({ type: RESET_LOG_FAILED });
