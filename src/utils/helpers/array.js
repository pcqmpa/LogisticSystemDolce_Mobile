/**
 * Module with some array helpers.
 * @module src/utils/helpers/array
 * @flow
 */

/**
 * Returns the element in the array with a key.
 * @param {Array} arr -> The array source.
 * @param {Number} key -> The key of the element.
 * @return {Any} -> The element at the position.
 */
const get = (arr: any[], key: number): any => {
  if (key === null) {
    return arr[0];
  }

  if (key >= arr.length) {
    return null;
  }

  return arr[key];
};

/**
 * Search for a coincindence that matches a id prop.
 * @param {Array} arr -> The array source.
 * @param {Any} id -> The id to search for.
 * @return {Any} -> The element that matches the condition.
 */
const findIndexById = (arr: any[], id: any): any => (
  arr.reduce((result, element, index) => (
    (element.id === id) ? index : result
  ), 0)
);

/**
 * Flattens a two dimensional array.
 * @param {Array} arr -> The two dimensional array.
 * @returns {Array} -> The flatten array.
 */
const flat = (arr: any[]): any[] => (
  arr.reduce((flattened, element) => {
    flattened.push(...element);
    return flattened;
  }, [])
);

/**
 * Removes undefined or null elements in an array.
 * @param {Array} arr -> The array to shrink.
 * @returns {Array} -> The shrinked array.
 */
const shrink = (arr: any[]) => (
  arr.filter((element: any) => (
    element !== null && element !== undefined
  ))
);

export default {
  get,
  findIndexById,
  flat,
  shrink
};
