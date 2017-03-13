/**
 * Module with the login reducer.
 * @module src/reducers/login
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Constants.
import {
  SET_USER_DATA,
  CLEAR_USER_DATA
} from '../constants/actions';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  data: {},
  isAuth: false
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Reducer action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [SET_USER_DATA]: (state, { data }) => ({
    ...state,
    data,
    isAuth: true
  }),
  [CLEAR_USER_DATA]: () => ({
    ...initialState
  })
};

export default createReducer(initialState, actionHandlers);
