/**
 * Module with validation helpers.
 * @module src/utils/helpers/validation
 */
/**
 * Checks if the element is empty.
 * @param {Any} element -> The element to check.
 * @returns {Bool} -> If the element is empty.
 */
import { object } from '../';

const isEmpty = element => (
  element === '' ||
  element === null ||
  (Array.isArray(element) && element.length === 0) ||
  (object.isObject(element) && Object.keys(element).length === 0)
);

export default { isEmpty };
