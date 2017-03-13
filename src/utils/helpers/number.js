/**
 * Module with Number specific helpers.
 * @module src/utils/helpers/number
 */

/**
 * Checks if the element is of type Number.
 * @param {Any} element -> The element to validate.
 * @returns {Bool} -> If the element passed the validation.
 */
const isNumber = element => (
  element.constructor === Number
);

export default { isNumber };
