/**
 * Module with string helpers.
 * @module src/utils/helpers/string
 */

/**
 * Checks if the element is of type String.
 * @param {Any} element -> The element to validate.
 * @returns {Bool} -> If the element passed the test.
 */
const isString = element => (
  element.constructor === String
);

export default { isString };
