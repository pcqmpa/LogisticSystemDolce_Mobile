/**
 * Module with login form actions.
 * @module src/actions/login-form
 * @flow
 */

// Contants.
import {
  UPDATE_LOGIN_FORM,
  REQUEST_LOGIN,
  CLEAR_LOGIN_FORM
} from '../constants/actions';

// Types.
import type {
  Action,
  LoginAction
} from '../utils/app-types';

/**
 * Action to update the login form data.
 * @param {String} field -> The field name.
 * @param {String} value -> The new value.
 * @returns {Object} -> The action object.
 */
export const updateLoginForm =
  (field: string, value: string): LoginAction => ({
    type: UPDATE_LOGIN_FORM,
    field,
    value
  });

/**
 * Action to trigger the user login request.
 * @returns {Object} -> The action object.
 */
export const requestLogin = (): Action => ({
  type: REQUEST_LOGIN
});

/**
 * Action to clear the login form.
 * @returns {Object} -> The action object.
 */
export const clearLoginForm = (): Action => ({
  type: CLEAR_LOGIN_FORM
});
