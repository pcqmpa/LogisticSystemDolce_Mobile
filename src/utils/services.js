/**
 * Module with the external api services.
 * @module src/utils/service-creators
 */
// Constants.
import { API_SERVICE_URL } from '../constants/values';

//
// Security Services.
// -----------------------------------------------------------------------------

/**
 * Service to fetch a user with the login form input.
 * @param {Object} payload -> Args to make te request.
 * @property {String} username -> The username.
 * @property {String} password -> The user password.
 * @returns {String} -> With the URL request.
 */
const callFetchUser = ({ username, password }) =>
  (`${API_SERVICE_URL}/api/callFetchUser?username=${username}&password=${password}`);


export default { callFetchUser };

