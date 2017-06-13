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
  INIT_ORDERS
} from '../constants/actions';

// Types.
import type {
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
  [INIT_ORDERS]:
    (state: OrdersState, { orders }: OrdersAction): OrdersState => ([
      ...orders
    ]),
  [ADD_PICTURE_TO_ORDER]:
    (state: OrdersState, action: OrderPictureAction): OrdersState => (
      state.map((order: Order) => {
        if (order.id === action.orderId) {
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
  [CLEAR_ORDERS]: (): OrdersState => (initialState)
};

export default createReducer(initialState, actionHandlers);
