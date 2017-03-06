/**
 * Module with the common data reducer.
 * @module src/reducers/common
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Constants.
import {
  TOGGLE_LOADING
} from '../constants/actions';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  loading: false
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Reducer action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [TOGGLE_LOADING]: state => ({
    ...state,
    loading: !state.loading
  })
};

export default createReducer(initialState, actionHandlers);
