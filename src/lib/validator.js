/**
 * Module with form validator.
 * @module src/lib/validator
 */
// Utils.
import { string } from '../utils/';

// Constants.
import {
  STRING,
  NUMBER,
  OBJECT,
  ARRAY,
  CHECKED_LIST,
  REQUIRED
} from '../constants/types';

/**
 * Validate the data based on the type of the rule.
 * @param {String} type -> The type rule.
 * @param {Any} data -> The data to validate.
 * @returns {Bool} -> The result of the validation.
 */
const validateByType = (type, data) => ({
  [STRING]: data !== null && !string.empty(data),
  [NUMBER]: data !== null && !string.empty(data.toString()),
  [ARRAY]: data !== null && data.length > 0,
  [OBJECT]: data !== null && Object.keys(data).length > 0,
  [CHECKED_LIST]: data !== null && data.some(element => (element.checked))
}[type]);

/**
 * Checks every prop based on a set of rules,
 * returns an object with the validation resume.
 * @param {Object} rules -> The set of rules.
 * @param {Object} data -> The form data.
 * @returns {Object} -> The data validation.
 */
const run = (rules, data) => {
  const resume = Object.keys(rules).reduce((validation, prop) => {
    let passed = true;
    if (rules[prop].rule === REQUIRED) {
      passed = validateByType(rules[prop].type, data[prop]);
    }

    return {
      ...validation,
      [prop]: passed
    };
  }, {});

  const valid = Object.keys(resume)
    .every(prop => (resume[prop]));

  return { resume, valid };
};

export default { run };
