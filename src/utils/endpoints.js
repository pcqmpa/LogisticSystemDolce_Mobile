/**
 * Module with the app endpoint services.
 * @module src/utils/endpoints
 * @flow
 */
// Constants.
import { API_SERVICE_URL } from '../constants/config';

//
// Security Services.
// -----------------------------------------------------------------------------

/**
 * Service to fetch a user with the login form input.
 * @returns {String} -> With the URL request.
 */
export const callFetchUser = () =>
  (`${API_SERVICE_URL}/api/callAuthMobileUser`);

/**
 * Service to fetch the distributor orders.
 * @param username -> The distributor username.
 * @returns {String} -> With the URL request.
 */
export const callGetOrdersToDeliver = (username: string) =>
  (`${API_SERVICE_URL}/api/callGetOrdersToDeliver?username=${username}`);

/**
 * Service to submit an order.
 * @returns {String} -> With the URL request.
 */
export const callDeliverOrder = () =>
  (`${API_SERVICE_URL}/api/callDeliverOrder`);

/**
 * Service to submit a list of orders.
 * @returns {String} -> With the URL request.
 */
export const callDeliverOrders = () =>
  (`${API_SERVICE_URL}/api/callDeliverOrders`);

/**
 * Service to submit a not delivered order.
 * @returns {String} -> With the URL request.
 */
export const callNotifyNotDeliveredOrder = () =>
  (`${API_SERVICE_URL}/api/callNotifyNotDeliveredOrder`);

/**
 * Servoce to save a picture on the server.
 * @returns {String} -> With the URL request.
 */
export const callSavePicture = () =>
  (`${API_SERVICE_URL}/api/savePicture`);

export default { callFetchUser };
