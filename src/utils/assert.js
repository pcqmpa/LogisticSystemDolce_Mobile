/**
 * Module with an assertion utility.
 * @module src/shared/utils/assert
 * @flow
 */

/**
 * Assertion method.
 * @param {Boolean} predicate -> Expression to evaluate.
 * @param {String} message -> The message when the assertion fails.
 * @returns {void}
 */
const assert = (predicate: boolean, message: string = 'Unknown Error') => {
  if (!predicate) {
    throw new Error(message);
  }
};

export default assert;
