/**
 * Module with the login form reducer.
 * @module src/reducers/login-form
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  UPDATE_LOGIN_FORM,
  CLEAR_LOGIN_FORM
} from '../constants/actions';

// Types.
import type {
  LoginAction,
  LoginState
} from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: LoginState = {
  username: '',
  password: ''
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Login form action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [UPDATE_LOGIN_FORM]:
    (state: LoginState, { field, value }: LoginAction): LoginState => ({
      ...state,
      [field]: value
    }),
  [CLEAR_LOGIN_FORM]: (): LoginState => ({
    ...initialState
  })
};

export default createReducer(initialState, actionHandlers);
