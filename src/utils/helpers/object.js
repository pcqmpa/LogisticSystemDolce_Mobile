/**
 * Module with some object helpers.
 * @module src/utils/helpers/object
 */

/**
 * Validate if an object has any keys.
 * @param {Object} obj -> The object to validate.
 * @returns {Bool} -> If the object has keys.
 */
const hasKeys = obj => (
  obj && Object.keys(obj).length
);

export default { hasKeys };
