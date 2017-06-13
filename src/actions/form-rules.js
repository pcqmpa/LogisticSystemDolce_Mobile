/**
 * Module with form rules actions.
 * @module src/actions/form-rules
 * @flow
 */
// Constants.
import {
  UPDATE_RULES_VALIDATION,
  CLEAR_RULES_VALIDATION
} from '../constants/actions';

// Types.
import type {
  ClearRulesAction,
  Resume,
  FormRulesAction
} from '../utils/app-types';

/**
 * Action to update validation per form rules.
 * @param  {String} form -> The form.
 * @param  {Object} data -> New validation data.
 * @return {Object} -> The action.
 */
export const updateRules = (form: string, data: Resume): FormRulesAction => ({
  type: UPDATE_RULES_VALIDATION,
  form,
  data
});

/**
 * Action to clear the rules of a form.
 * @params {String} form -> The form.
 * @return {Object} -> The action.
 */
export const clearRules = (form: string): ClearRulesAction => ({
  type: CLEAR_RULES_VALIDATION,
  form
});
