/**
 * Module with the user reducer.
 * @module src/reducers/user
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Types.
import type { User } from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------
// Actions.
import {
  AUTH_USER,
  LOGOUT_USER
} from '../constants/actions';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: User = {
  token: null,
  isAuth: false
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Form rules action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [AUTH_USER]: (state: User, { data }): User => ({
    ...data,
    isAuth: true
  }),
  [LOGOUT_USER]: (): User => ({
    ...initialState
  })
};

export default createReducer(initialState, actionHandlers);
