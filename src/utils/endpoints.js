/**
 * Module with the app endpoint services.
 * @module src/utils/endpoints
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

export default { callFetchUser };

