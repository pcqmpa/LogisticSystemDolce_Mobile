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
  REQUEST_ORDERS,
  SET_ORDER_TO_NOT_DELIVERED,
  SYNCED_ORDERS,
  NOTIFY_NOT_DELIVERED_ORDER,
  UPDATE_ORDER_MESSAGE
} from '../constants/actions';

// Types.
import type {
  Action,
  DeliverOrderAction,
  DeliverOrderPatiallyAction,
  DeliverOrderSuccededAction,
  Order,
  OrderAction,
  OrdersAction,
  OrderMessageAction,
  OrderPictureAction,
  SyncedOrdersAction
} from '../utils/app-types';

/**
 * Action to add a specific picture to an order.
 * @param  {String} pictureType -> the type of the picture.
 * @param  {String} picture -> The location of the picture.
 * @return {Object} -> The action.
 */
export const addPictureToOrder =
  (orderId: string = '', pictureType: string, picture: string): OrderPictureAction => ({
    orderId,
    picture,
    pictureType,
    type: ADD_PICTURE_TO_ORDER
  });

/**
 * Action to initialize the orders list.
 * @param  {Array} orders -> The list of orders.
 * @return {Object} -> The action.
 */
export const initOrders = (orders: Order[]): OrdersAction => ({
  orders,
  type: INIT_ORDERS
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
  order,
  type: DELIVER_ORDER
});

/**
 * Action to change the state of an order to delivered.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action.
 */
export const deliverOrderSucceded = (orderId: string = ''): DeliverOrderSuccededAction => ({
  orderId,
  type: DELIVER_ORDER_SUCCESS
});

/**
 * Action to change the state of an order to partially delivered.
 * Means that the order needs to be synchronized.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action.
 */
export const deliverOrderPartially = (orderId: string): DeliverOrderPatiallyAction => ({
  orderId,
  type: DELIVER_ORDER_PARTIALLY
});

/**
 * Action to update the not delivered order's message.
 * @param {String} orderId -> The id of the order.
 * @param {String} message -> The order message.
 * @returns {Object} -> The action.
 */
export const updateOrderMessage = (orderId: string, message: string = ''): OrderMessageAction => ({
  message,
  orderId,
  type: UPDATE_ORDER_MESSAGE
});

/**
 * Action to notify an order as not delivered.
 * @param {Number} numOrder -> The order number.
 * @returns {Object} -> The action.
 */
export const notifyNotDeliveredOrder = (orderId: string = ''): OrderAction => ({
  orderId,
  type: NOTIFY_NOT_DELIVERED_ORDER
});

/**
 * Action to set an order as not delivered, but it's still
 * available for delivery.
 * @param {Number} numOrder -> The order number.
 * @returns {Object} -> The action.
 */
export const setOrderToNotDelivered = (orderId: string = ''): OrderAction => ({
  orderId,
  type: SET_ORDER_TO_NOT_DELIVERED
});

/**
 * Action to update the state of a list of orders to synced.
 * @param {Array<Number>} orderIds -> The list of orders's ids.
 * @returns {Object} -> The action.
 */
export const syncedOrders = (orderIds: string[]): SyncedOrdersAction => ({
  type: SYNCED_ORDERS,
  orderIds
});
