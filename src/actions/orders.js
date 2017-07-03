/**
 * Module with the orders action creators.
 * @module src/actions/orders
 * @flow
 */
// Constants.
import {
  ADD_PICTURE_TO_ORDER,
  CLEAR_ORDERS,
  DELIVER_ORDER,
  DELIVER_ORDER_PARTIALLY,
  DELIVER_ORDER_SUCCESS,
  INIT_ORDERS,
  REQUEST_ORDERS
} from '../constants/actions';

// Types.
import type {
  Action,
  DeliverOrderAction,
  DeliverOrderPatiallyAction,
  DeliverOrderSuccededAction,
  Order,
  OrdersAction,
  OrderPictureAction
} from '../utils/app-types';

/**
 * Action to add a specific picture to an order.
 * @param  {String} pictureType -> the type of the picture.
 * @param  {String} picture -> The location of the picture.
 * @return {Object} -> The action.
 */
export const addPictureToOrder =
  (numOrder: number | null = 0, pictureType: string, picture: string): OrderPictureAction => ({
    type: ADD_PICTURE_TO_ORDER,
    numOrder,
    picture,
    pictureType
  });

/**
 * Action to initialize the orders list.
 * @param  {Array} orders -> The list of orders.
 * @return {Object} -> The action.
 */
export const initOrders = (orders: Order[]): OrdersAction => ({
  type: INIT_ORDERS,
  orders
});

/**
 * Action to clear the current orders.
 * @return {Object} -> The action.
 */
export const clearOrders = (): Action => ({
  type: CLEAR_ORDERS
});

/**
 * Action to requests the orders to the server.
 * @return {Object} -> The action.
 */
export const requestOrders = (): Action => ({
  type: REQUEST_ORDERS
});

/**
 * Action to submit an order to the server.
 * @param {Object} order -> The order to be delivered.
 * @return {Object} -> The action.
 */
export const deliverOrder = (order: Order): DeliverOrderAction => ({
  type: DELIVER_ORDER,
  order
});

/**
 * Action to change the state of an order to delivered.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action.
 */
export const deliverOrderSucceded = (numOrder: number = 0): DeliverOrderSuccededAction => ({
  type: DELIVER_ORDER_SUCCESS,
  numOrder
});

/**
 * Action to change the state of an order to partially delivered.
 * Means that the order needs to be synchronized.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action.
 */
export const deliverOrderPartially =
  (numOrder: number = 0): DeliverOrderPatiallyAction => ({
    type: DELIVER_ORDER_PARTIALLY,
    numOrder
  });
