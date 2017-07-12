/**
 * Module with string helpers.
 * @module src/utils/helpers/string
 * @flow
 */

/**
 * Checks if the element is of type String.
 * @param {Any} element -> The element to validate.
 * @returns {Boolean} -> If the element passed the test.
 */
const isString = (element: any): boolean => (
  element.constructor === String
);

/**
 * Checks if a string is empty
 * @param {String} string -> The string to validate.
 * @returns {Boolean} -> If the string is empty.
 */
const empty = (str: string): boolean => (
  str.length === 0
);

/**
 * Pads a number with a max of two digits.
 * @param {Number} number -> The number to pad.
 * @returns {String} -> The string with the number formatted.
 */
const pad = (number: number): string => (String(`0${number}`).slice(-2));

/**
 * Capitalize a string.
 * @param {String} str -> String to capitalize.
 * @returns {String} The string capitalized.
 */
const capitalize = (str: string): string => (
  str.split(' ')
    .map((word: string): string => {
      if (word === '') {
        return word;
      }
      return word.toUpperCase()[0] + word.slice(1);
    })
    .join(' ')
);

export default { capitalize, empty, isString, pad };
