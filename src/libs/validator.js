/**
 * Module with form validator.
 * @module src/lib/validator
 * @flow
 */
// Utils.
import {
  string,
  number,
  object,
  validation
} from '../utils/helpers/';

// Constants.
import {
  STRING,
  NUMBER,
  OBJECT,
  ARRAY,
  REQUIRED
} from '../constants/types';

// Types.
import type {
  Resume,
  Rules,
  RulesData,
  Validator
} from '../utils/app-types';

type ValidationCallback = (resume: Resume, form: string) => void;
type Validation = (any) => boolean;

/**
 * Validate the data based on the type of the rule.
 * @param {String} type -> The type rule.
 * @param {Any} data -> The data to validate.
 * @returns {Boolean} -> The result of the validation.
 */
const validateByType = (type: string): Validation => ({
  [STRING]: (data: any) => (string.isString(data)),
  [NUMBER]: (data: any) => (number.isNumber(data)),
  [ARRAY]: (data: any) => (Array.isArray(data)),
  [OBJECT]: (data: any) => (object.isObject(data))
}[type]);

/**
 * Initialize the validator functionality.
 * @param {Function} success -> The validation success callback.
 * @param {Function} fail -> The validation fail callback.
 * @returns {Object} -> The validator setup.
 */
const init = (success: ValidationCallback, fail: ValidationCallback): Validator => {
  /**
   * Checks every prop based on a set of rules,
   * returns an object with the validation resume.
   * @param {Object} rules -> The set of rules.
   * @param {Object} data -> The form data.
   * @param {String} form -> the form id.
   * @returns {Object} -> The data validation.
   */
  const run = (rules: Rules, data: RulesData, form: string): boolean => {
    const resume = Object.keys(rules).reduce(
      (validationProc: object, prop: string) => {
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
      }, {}
    );

    const valid = Object.keys(resume)
      .every((prop: string): boolean => (resume[prop]));

    if (valid) {
      success(resume, form);
    } else {
      fail(resume, form);
    }

    return valid;
  };

  return { run };
};

export default { init };
