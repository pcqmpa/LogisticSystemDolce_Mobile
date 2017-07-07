/**
 * Module with the app transmuter utility.
 * It maps any type of data into something usable.
 * @module src/libs/transmuter
 * @flow
 */
// Third Party Utils.
import shortId from 'shortid';

// Types.
import type { Order } from '../utils/app-types';

/**
 * Transmutes an order to add required props.
 * @param {Object} order -> The order.
 * @returns {Object} -> With the serialized data.
 */
const toInprogressOrder = (order: Order): Order => ({
  id: shortId.generate(),
  ...order,
  pictures: {
    code: null,
    package: null
  },
  retrieved: false,
  synced: false
});

/**
 * Transmutes the order list to add required props.
 * @param {Array} orders -> The orders.
 * @returns {Array} -> With the serialized data.
 */
const toInProgressOrders = (orders: Order[]): Order[] => (
  orders
    .map((order: Order) => (toInprogressOrder(order)))
);

export default {
  toInProgressOrders,
  toInprogressOrder
};
