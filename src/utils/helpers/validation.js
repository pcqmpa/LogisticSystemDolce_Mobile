/**
 * Module with validation helpers.
 * @module src/utils/helpers/validation
 * @flow
 */
/**
 * Checks if the element is empty.
 * @param {Any} element -> The element to check.
 * @returns {Bool} -> If the element is empty.
 */
import { object } from './';

/**
 * Checks if the element es not empty.
 * @param {Any} element -> The element to validate.
 * @returns {Boolean} -> If the element passes the validation.
 */
const isEmpty = (element: any): boolean => (
  element === '' ||
  element === null ||
  (Array.isArray(element) && element.length === 0) ||
  (object.isObject(element) && Object.keys(element).length === 0)
);

export default { isEmpty };
