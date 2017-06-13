/**
 * Module with the orders action creators.
 * @module src/actions/orders
 * @flow
 */
// Constants.
import {
  ADD_PICTURE_TO_ORDER,
  CLEAR_ORDERS,
  INIT_ORDERS,
  REQUEST_ORDERS,
  SUBMIT_ORDER
} from '../constants/actions';

// Types.
import type {
  Action,
  Order,
  OrdersAction,
  OrderPictureAction,
  SubmitOrderAction
} from '../utils/app-types';

/**
 * Action to add a specific picture to an order.
 * @param  {String} pictureType -> the type of the picture.
 * @param  {String} picture -> The location of the picture.
 * @return {Object} -> The action.
 */
export const addPictureToOrder =
  (orderId: string, pictureType: string, picture: string): OrderPictureAction => ({
    type: ADD_PICTURE_TO_ORDER,
    orderId,
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
 * @param {Number} numOrder -> The number of the order.
 * @return {Object} -> The action.
 */
export const submitOrder = (numOrder: number): SubmitOrderAction => ({
  type: SUBMIT_ORDER,
  numOrder
});
