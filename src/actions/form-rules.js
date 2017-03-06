/**
 * Module with form rules actions.
 * @module src/actions/form-rules
 */
import {
  UPDATE_RULES_VALIDATION,
  CLEAR_RULES_VALIDATION
} from '../constants/actions';

/**
 * Action to update validation per form rules.
 * @param  {String} form -> Form type.
 * @param  {Object} data -> New validation data.
 * @return {Object} -> The action.
 */
export const updateRules = (form, data) => ({
  type: UPDATE_RULES_VALIDATION,
  form,
  data
});

/**
 * Action to clear validation rules.
 * @params {String} form -> The form type.
 * @return {Object} -> The action.
 */
export const clearRules = form => ({
  type: CLEAR_RULES_VALIDATION,
  form
});

