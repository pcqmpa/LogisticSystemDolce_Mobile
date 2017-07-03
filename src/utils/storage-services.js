/**
 * Module with the app storage services.
 * @module src/utils/storage-services
 * @flow
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';

// Types.
import type {
  Order,
  StorageError,
  User
} from './app-types';

// Utils.
import storage from './storage';

// Constants.
import {
  ORDERS_KEY,
  USER_KEY
} from '../constants/strings';
import {
  USER_DATA_EXPIRATION,
  CURRENT_ORDERS_EXPIRATION
} from '../constants/values';

//
// User Data.
// -----------------------------------------------------------------------------
/**
 * Sets and updates the user data.
 * @param {Object} user -> The user data.
 * @returns {Observable} -> The promise that resolves the store process.
 */
const saveUserData = (user: User): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.save({
      key: USER_KEY,
      data: { ...user },
      expires: USER_DATA_EXPIRATION
    })
  )
);

/**
 * Get the stored user data.
 * @returns {Observable} -> The promise resolving the data.
 */
const getUserData = (): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.load({
      key: USER_KEY,
      autoSync: false
    })
  ).catch((err: StorageError): Observable<*> => (
    Observable.of({ error: err.name })
  ))
);

/**
 * Removes the stored user data.
 * @returns {Observable} -> The promise resolving the removal process.
 */
const removeUserData = (): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.remove({
      key: USER_KEY
    })
  )
);

//
// Current Orders.
// -----------------------------------------------------------------------------

/**
 * Sets or updates the current user orders.
 * @param {Array} orders -> The orders returned from the server.
 * @returns {Observable} -> The promise that resolves the store process.
 */
const saveOrders = (orders: Order[]): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.save({
      key: ORDERS_KEY,
      data: [...orders],
      expires: CURRENT_ORDERS_EXPIRATION
    })
  )
);

/**
 * Retrieves the stored orders.
 * @returns {Observable} -> The promise resolving the data.
 */
const getOrders = (): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.load({
      key: ORDERS_KEY,
      autoSync: false
    })
  ).catch((err: StorageError): Observable<*> => (
    Observable.of({ error: err.name })
  ))
);

/**
 * Removes the stored orders.
 * @returns {Observable} -> The promise resolving the removal process.
 */
const removeOrders = (): Observable<Promise<*>> => (
  Observable.fromPromise(
    storage.remove({
      key: ORDERS_KEY
    })
  )
);

export default {
  getOrders,
  getUserData,
  removeOrders,
  removeUserData,
  saveOrders,
  saveUserData
};
