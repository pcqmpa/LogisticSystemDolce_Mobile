/**
 * Module with the orders reducer.
 * @module src/reducers/orders
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Types.
import type {
  DeliverOrderPatiallyAction,
  DeliverOrderSuccededAction,
  Order,
  OrderAction,
  OrdersAction,
  OrderMessageAction,
  OrderPictureAction,
  OrdersState,
  SyncedOrdersAction
} from '../utils/app-types';

// Actions.
import {
  ADD_PICTURE_TO_ORDER,
  CLEAR_ORDERS,
  DELIVER_ORDER_PARTIALLY,
  DELIVER_ORDER_SUCCESS,
  INIT_ORDERS,
  SET_ORDER_TO_NOT_DELIVERED,
  SYNCED_ORDERS,
  UPDATE_ORDER_MESSAGE
} from '../constants/actions';

// Constants.
import { OrderStateEnum } from '../constants/types';

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
  [CLEAR_ORDERS]: (): OrdersState => (initialState),
  [DELIVER_ORDER_PARTIALLY]:
  (state: OrdersState, action: DeliverOrderPatiallyAction): OrdersState => (
    state.map((order: Order) => {
      if (order.id === action.orderId) {
        return {
          ...order,
          state: OrderStateEnum.DELIVERED
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
          state: OrderStateEnum.DELIVERED,
          synced: true
        };
      }
      return order;
    })
  ),
  [INIT_ORDERS]: (state: OrdersState, { orders }: OrdersAction): OrdersState => ([
    ...orders
  ]),
  [SET_ORDER_TO_NOT_DELIVERED]: (state: OrdersState, action: OrderAction): OrdersState => (
    state.map((order: Order) => {
      if (order.NumPedido === action.numOrder) {
        return {
          ...order,
          state: OrderStateEnum.NOT_DELIVERED
        };
      }
      return order;
    })
  ),
  [UPDATE_ORDER_MESSAGE]: (state: OrdersState, action: OrderMessageAction): OrdersState => (
    state.map((order: Order) => {
      if (order.id === action.orderId) {
        return {
          ...order,
          message: action.message
        };
      }
      return order;
    })
  ),
  [SYNCED_ORDERS]: (state: OrdersState, actions: SyncedOrdersAction): OrdersState => (
    state.map((order: Order) => {
      if (actions.orderIds.includes(order.id || '')) {
        return {
          ...order,
          Entregado: true,
          state: OrderStateEnum.DELIVERED,
          synced: true
        };
      }
      return order;
    })
  )
};

export default createReducer(initialState, actionHandlers);
