/**
 * Module with the common data reducer.
 * @module src/reducers/common
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Constants.
import {
  TOGGLE_LOADING,

  SHOW_TOAST,
  HIDE_TOAST,

  UPDATE_APP_SYNCED
} from '../constants/actions';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * The Toast component initial state.
 * @type {Object}
 */
const toastInitialState = {
  show: false,
  message: ''
};

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  loading: false,
  toast: toastInitialState,
  synced: false
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
  }),
  [SHOW_TOAST]: (state, { message }) => ({
    ...state,
    toast: {
      show: true,
      message
    }
  }),
  [HIDE_TOAST]: state => ({
    ...state,
    toast: toastInitialState
  }),
  [UPDATE_APP_SYNCED]: (state, { synced }) => ({
    ...state,
    synced
  })
};

export default createReducer(initialState, actionHandlers);
