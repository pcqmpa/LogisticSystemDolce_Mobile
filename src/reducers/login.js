/**
 * Module with the login reducer.
 * @module src/reducers/login
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

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

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  username: '',
  password: '',
  failed: false,
  isSubmitting: false
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Reducer action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [UPDATE_USERNAME_INPUT]: (state, { username }) => ({
    ...state,
    username
  }),
  [UPDATE_PASSWORD_INPUT]: (state, { password }) => ({
    ...state,
    password
  }),
  [LOGIN_REQUEST]: state => ({
    ...state,
    isSubmitting: true
  }),
  [LOGIN_SUCCESS]: state => ({
    ...state,
    isSubmitting: false
  }),
  [LOGIN_FAILED]: state => ({
    ...state,
    isSubmitting: false,
    failed: true
  }),
  [LOGOUT_REQUEST]: state => ({
    ...state,
    isSubmitting: true
  }),
  [LOGOUT_SUCCESS]: state => ({
    ...state,
    isSubmitting: false
  }),
  [LOGOUT_FAILED]: state => ({
    ...state,
    isSubmitting: false,
    failed: true
  }),
  [RESET_LOG_FAILED]: state => ({
    ...state,
    failed: false
  })
};

export default createReducer(initialState, actionHandlers);
