/**
 * Module with the common reducer.
 * @module src/reducers/login-form
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  ADD_PICTURE_TO_ORDER,
  CLEAR_CURRENT_SCREEN_DATA,
  HIDE_LOADING,
  HIDE_TOAST,
  SET_ORDER,
  SET_SCREEN_DEFAULT_STATE,
  SET_SCREEN_LOADED,
  SET_STORE_UPDATED,
  SHOW_LOADING,
  SHOW_TOAST,
  UPDATE_LOADING_LABEL
} from '../constants/actions';

// Types.
import type {
  CommonState,
  LoadinAction,
  LoadingLabelAction,
  LoadingState,
  OrderDetailsAction,
  ToastAction,
  ToastState
} from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Toast initial state.
 * @type {Object}
 */
const toast: ToastState = {
  show: false,
  type: null,
  message: ''
};

/**
 * Loading view initial state.
 * @type {Object}
 */
const loading: LoadingState = {
  show: false,
  label: 'Cargando...'
};

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: CommonState = {
  loading,
  order: 0,
  screenLoaded: false,
  storeUpdated: false,
  toast
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Form rules action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [ADD_PICTURE_TO_ORDER]: (state: CommonState): CommonState => ({
    ...state,
    storeUpdated: false
  }),
  [SHOW_TOAST]: (state: CommonState, { message, toastType: type }: ToastAction): CommonState => ({
    ...state,
    toast: {
      show: true,
      type,
      message
    }
  }),
  [HIDE_TOAST]: (state: CommonState): CommonState => ({
    ...state,
    toast: { ...toast }
  }),
  [SHOW_LOADING]: (state: CommonState, { label }: LoadinAction): CommonState => ({
    ...state,
    loading: {
      show: true,
      label
    }
  }),
  [HIDE_LOADING]: (state: CommonState): CommonState => ({
    ...state,
    loading: { ...loading }
  }),
  [SET_ORDER]: (state: CommonState, { order, orderId }: OrderDetailsAction) => ({
    ...state,
    order,
    orderId
  }),
  [SET_SCREEN_LOADED]: (state: CommonState): CommonState => ({
    ...state,
    screenLoaded: true
  }),
  [SET_STORE_UPDATED]: (state: CommonState): CommonState => ({
    ...state,
    storeUpdated: true
  }),
  [SET_SCREEN_DEFAULT_STATE]: (state: CommonState): CommonState => ({
    ...state,
    screenLoaded: false
  }),
  [CLEAR_CURRENT_SCREEN_DATA]: (): CommonState => ({
    ...initialState
  }),
  [UPDATE_LOADING_LABEL]: (state: CommonState, action: LoadingLabelAction): CommonState => ({
    ...state,
    loading: {
      ...state.loading,
      label: action.label
    }
  })
};

export default createReducer(initialState, actionHandlers);
