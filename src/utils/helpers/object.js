/**
 * Module with some object helpers.
 * @module src/utils/helpers/object
 * @flow
 */

/**
 * Check if the element is an object.
 * @param {Any} element -> The element to validate.
 * @returns {Bool} -> If the element is an object.
 */
const isObject = (element: any): boolean => (
  element.constructor === Object
);

export default { isObject };
