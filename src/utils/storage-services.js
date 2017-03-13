/**
 * Module with the app storage services.
 * @module src/utils/storage-services
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

// Utils.
import { storage } from './';

// Constants.
import {
  USER_DATA_KEY,
  CURRENT_ORDERS_KEY
} from '../constants/strings';
import {
  USER_DATA_EXPIRATION,
  CURRENT_ORDERS_EXPIRATION
} from '../constants/values';

// User Data.
/**
 * Sets and updates the user data.
 * @param {Object} user -> The user data.
 * @returns {void}
 */
const saveUserData = user => (
  storage.save({
    key: USER_DATA_KEY,
    rawData: { ...user },
    expires: USER_DATA_EXPIRATION
  })
);

/**
 * Get the stored user data.
 * @returns {Symbol.Observable} -> The promise resolving the data.
 */
const getUserData = () => (
  Observable.fromPromise(
    storage.load({
      key: USER_DATA_KEY,
      autoSync: false
    })
  )
);

// Current Orders.

/**
 * Sets or updates the current user orders.
 * @param {Array} orders -> The orders returned from the server.
 * @returns {void}
 */
const saveCurrentOrders = orders => (
  storage.save({
    key: CURRENT_ORDERS_KEY,
    rawData: [...orders],
    expires: CURRENT_ORDERS_EXPIRATION
  })
);

/**
 * Retrieves the orders stored.
 * @returns {Symbol.Observable} -> The promise resolving the data.
 */
const getCurrentOrders = () => (
  Observable.fromPromise(
    storage.load({
      key: CURRENT_ORDERS_KEY,
      autoSync: false
    })
  )
);

export default {
  saveUserData,
  getUserData,
  saveCurrentOrders,
  getCurrentOrders
};
