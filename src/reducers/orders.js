/**
 * Module with the orders reducer.
 * @module src/reducers/orders
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  ADD_PICTURE_TO_ORDER,
  CLEAR_ORDERS,
  DELIVER_ORDER_PARTIALLY,
  DELIVER_ORDER_SUCCESS,
  INIT_ORDERS
} from '../constants/actions';

// Types.
import type {
  DeliverOrderPatiallyAction,
  DeliverOrderSuccededAction,
  Order,
  OrdersAction,
  OrderPictureAction,
  OrdersState
} from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: OrdersState = [];

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Login form action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [INIT_ORDERS]: (state: OrdersState, { orders }: OrdersAction): OrdersState => ([
    ...orders
  ]),
  [ADD_PICTURE_TO_ORDER]: (state: OrdersState, action: OrderPictureAction): OrdersState => (
    state.map((order: Order) => {
      if (order.NumPedido === action.numOrder) {
        return {
          ...order,
          pictures: {
            ...order.pictures,
            [action.pictureType]: action.picture
          }
        };
      }
      return order;
    })
  ),
  [DELIVER_ORDER_SUCCESS]:
  (state: OrdersState, action: DeliverOrderSuccededAction): OrdersState => (
    state.map((order: Order) => {
      if (order.NumPedido === action.numOrder) {
        return {
          ...order,
          Entregado: true,
          retrieved: true,
          synced: true
        };
      }
      return order;
    })
  ),
  [DELIVER_ORDER_PARTIALLY]:
  (state: OrdersState, action: DeliverOrderPatiallyAction): OrdersState => (
    state.map((order: Order) => {
      if (order.NumPedido === action.numOrder) {
        return {
          ...order,
          retrieved: true
        };
      }
      return order;
    })
  ),
  [CLEAR_ORDERS]: (): OrdersState => (initialState)
};

export default createReducer(initialState, actionHandlers);
