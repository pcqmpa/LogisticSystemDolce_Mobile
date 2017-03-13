/**
 * Module with the orders reducer actions.
 * @module src/actions/orders
 */
// Constants.
import {
  SET_ORDERS,
  UPDATE_ORDER,
  SET_CURRENT_ORDER,

  RETRIEVE_ORDER_REQUEST,
  RETRIEVE_ORDER_SUCCESS,
  RETRIEVE_ORDER_FAILED
} from '../constants/actions';

/**
 * Action to set the current orders list.
 * @param {Array} orders -> The orders list.
 * @returns {Object} -> The action object.
 */
export const setOrders = orders => ({
  type: SET_ORDERS,
  orders
});

/**
 * Actions to update a specific order.
 * @param {String} orderId -> The order id.
 * @param {Object} payload -> The props to update from the order.
 * @returns {Object} -> The action object.
 */
export const udpateOrder = (orderId, payload) => ({
  type: UPDATE_ORDER,
  orderId,
  payload
});

/**
 * Action to set a selected order.
 * @param {String} orderId -> The order selected.
 * @returns {Object} -> The action object.
 */
export const setCurrentOrder = orderId => ({
  type: SET_CURRENT_ORDER,
  orderId
});

/**
 * Action to make a retrieve request of an order.
 * @param {String} orderId -> The order to retrieve.
 * @returns {Object} -> The action object.
 */
export const requestRetrieveOrder = orderId => ({
  type: RETRIEVE_ORDER_REQUEST,
  orderId
});

/**
 * Action to notify a retrieve succeded.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action object.
 */
export const retrieveSuccess = numOrder => ({
  type: RETRIEVE_ORDER_SUCCESS,
  numOrder
});

/**
 * Action to notify a retrieve failed.
 * @param {Number} numOrder -> The number of the order.
 * @returns {Object} -> The action object.
 */
export const retrieveFailed = numOrder => ({
  type: RETRIEVE_ORDER_FAILED,
  numOrder
});
