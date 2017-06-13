/**
 * Module with number helpers.
 * @module src/utils/helpers/string
 * @flow
 */

/**
 * Checks if the element is of type Number.
 * @param {Any} element -> The element to validate.
 * @returns {Boolean} -> If the element passed the test.
 */
const isNumber = (element: any): boolean => (
  element.constructor === Number
);

export default { isNumber };
