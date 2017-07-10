/**
 * Module with the app transmuter utility.
 * It maps any type of data into something usable.
 * @module src/libs/transmuter
 * @flow
 */
// Third Party Utils.
import shortId from 'shortid';

// Types.
import type {
  CustomMap,
  Order,
  Zone
} from '../utils/app-types';

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

/**
 * Transmutes the orders to order them by zone.
 * @param {Array} orders -> The list of orders.
 * @returns {Array} -> The list of zones with their orders.
 */
const toZones = (orders: Order[]): Zone[] => {
  const mappedOrders = orders.reduce((map: CustomMap, order: Order) => {
    const newMap: CustomMap = { ...map };
    if (!newMap[order.StrZona]) {
      newMap[order.StrZona] = 0;
    }
    newMap[order.StrZona] += 1;
    return newMap;
  }, {});
  const zones: Zone[] = Object.keys(mappedOrders)
    .map((zoneId: string) => {
      const zone: Zone = {
        orders: mappedOrders[zoneId],
        zoneId
      };
      return zone;
    });
  return zones;
};

export default {
  toInProgressOrders,
  toInprogressOrder,
  toZones
};
