/**
 * Module with component specific helpers.
 * @module src/utils/helpers/component-helpers
 */

/**
 * Concats a list modifier styles.
 * @param {Array} componentStyles -> The component styles.
 * @param {Array} modifiers -> The style modifiers.
 * @returns {Array} -> The result styles.
 */
const concatStyles = (componentStyles, modifiers) => (
  modifiers.reduce((styles, modifier) => (
    (modifier) ? [...styles, modifier] : styles
  ), [componentStyles])
);

export default { concatStyles };
