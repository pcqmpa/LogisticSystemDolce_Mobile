/**
 * Module with form validator.
 * @module src/lib/validator
 */
// Utils.
import {
  string,
  number,
  object,
  validation
} from '../utils/';

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
const validateByType = type => ({
  [STRING]: data => (string.isString(data)),
  [NUMBER]: data => (number.isNumber(data)),
  [ARRAY]: data => (Array.isArray(data)),
  [OBJECT]: data => (object.isObject(data)),
  [CHECKED_LIST]: data => (
    Array.isArray(data) &&
    data.some(element => (element.checked))
  )
}[type]);

/**
 * Checks every prop based on a set of rules,
 * returns an object with the validation resume.
 * @param {Object} rules -> The set of rules.
 * @param {Object} data -> The form data.
 * @returns {Object} -> The data validation.
 */
const run = (rules, data) => {
  const resume = Object.keys(rules).reduce((validationProc, prop) => {
    let passed = true;
    if (rules[prop].rule === REQUIRED) {
      passed = (
        !validation.isEmpty(data[prop]) &&
        validateByType(rules[prop].type)(data[prop])
      );
    }

    return {
      ...validationProc,
      [prop]: passed
    };
  }, {});

  const valid = Object.keys(resume)
    .every(prop => (resume[prop]));

  return { resume, valid };
};

export default { run };
