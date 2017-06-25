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
 * Transmutes the order list to add required props.
 * @param {Array} orders -> The orders.
 * @returns {Array} -> With the serialized data.
 */
const toInProgressOrders = (orders: Order[]): Order[] => (
  orders
    .map((order: Order) => ({
      id: shortId.generate(),
      ...order,
      retrieved: false,
      synced: false,
      pictures: {
        code: null,
        package: null
      }
    }))
);

export default {
  toInProgressOrders
};
