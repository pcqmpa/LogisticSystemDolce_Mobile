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


export default { callFetchUser };

