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

// Constants.
import { CODE, PACKAGE } from '../constants/types';

/**
 * Transmutes the order list to add required props.
 * @param {Array} orders -> The orders.
 * @returns {Array} -> With the serialized data.
 */
const toInProgressOrders = (orders: Order[]): Order[] => (
  orders
    .map(order => ({
      id: shortId.generate(),
      ...order,
      synced: false,
      pictures: {
        [CODE]: null,
        [PACKAGE]: null
      }
    }))
);

export default {
  toInProgressOrders
};
