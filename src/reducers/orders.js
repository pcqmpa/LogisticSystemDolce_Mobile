/**
 * Module with the orders redux reducer.
 * @module src/reducers/orders
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Constants.
import {
  SET_ORDERS,
  UPDATE_ORDER,
  SET_CURRENT_ORDER,

  RETRIEVE_ORDER_REQUEST,
  RETRIEVE_ORDER_SUCCESS,
  RETRIEVE_ORDER_FAILED
} from '../constants/actions';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  orders: [],
  currentOrder: {}
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Reducer action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [SET_ORDERS]: (state, { orders }) => ({
    ...state,
    orders
  }),
  [UPDATE_ORDER]: (state, { orderId, payload }) => ({
    ...state,
    orders: state.orders
      .map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            ...payload
          };
        }
        return order;
      }),
    currentOrder: (state.currentOrder.id === orderId) ?
      { ...state.currentOrder, ...payload } :
      { ...state.currentOrder }
  }),
  [SET_CURRENT_ORDER]: (state, { orderId }) => ({
    ...state,
    currentOrder: state.orders
      .find(order => (order.id === orderId))
  }),
  [RETRIEVE_ORDER_REQUEST]: (state, { numOrder }) => ({
    ...state,
    orders: state.orders
      .map((order) => {
        if (order.NumPedido === numOrder) {
          return {
            ...order,
            isSubmitting: true
          };
        }
        return order;
      }),
    currentOrder: (state.currentOrder.NumPedido === numOrder) ?
      { ...state.currentOrder, isSubmitting: true } :
      { ...state.currentOrder }
  }),
  [RETRIEVE_ORDER_SUCCESS]: (state, { numOrder }) => ({
    ...state,
    orders: state.orders
      .map((order) => {
        if (order.NumPedido === numOrder) {
          return {
            ...order,
            synced: false,
            isSubmitting: false
          };
        }
        return order;
      }),
    currentOrder: (state.currentOrder.NumPedido === numOrder) ?
      { ...state.currentOrder, synced: false, isSubmitting: false } :
      { ...state.currentOrder }
  }),
  [RETRIEVE_ORDER_FAILED]: (state, { numOrder }) => ({
    ...state,
    orders: state.orders
      .map((order) => {
        if (order.NumPedido === numOrder) {
          return {
            ...order,
            failed: true,
            isSubmitting: false
          };
        }
        return order;
      }),
    currentOrder: (state.currentOrder.NumPedido === numOrder) ?
      { ...state.currentOrder, failed: false, isSubmitting: false } :
      { ...state.currentOrder }
  })
};

export default createReducer(initialState, actionHandlers);
