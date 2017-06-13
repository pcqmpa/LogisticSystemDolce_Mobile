/**
 * Module with the form rules reducer.
 * @module src/reducers/form-rules
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  UPDATE_RULES_VALIDATION,
  CLEAR_RULES_VALIDATION
} from '../constants/actions';

// Constants.
import {
  STRING,
  REQUIRED
} from '../constants/types';

// Types.
import type {
  FormRulesAction,
  FormRulesState,
  LoginFormRule,
  Rule,
  RuleType
} from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Optional rule.
 * @type {Object}
 */
// const optionalRule = {
//   rule: OPTIONAL,
//   valid: true
// };

/**
 * Form initial and default rule.
 * @type {Object}
 */
const requiredRule: Rule = {
  rule: REQUIRED,
  valid: true
};

/**
 * Create a required rule.
 * @param {String} type -> The type of the rule.
 * @returns {Object} -> The rule.
 */
const createRule = (type: RuleType = STRING): Rule => ({
  ...requiredRule,
  type
});

/**
 * Login Form.
 * @type {Object}
 */
const loginForm: LoginFormRule = {
  username: createRule(),
  password: createRule()
};

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: FormRulesState = {
  loginForm
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Form rules action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [UPDATE_RULES_VALIDATION]:
    (state: FormRulesState, { form, data }: FormRulesAction): FormRulesState => ({
      ...state,
      [form]: Object.keys(state[form])
        .reduce((rules, prop) => ({
          ...rules,
          [prop]: {
            ...state[form][prop],
            valid: data[prop]
          }
        }), {})
    }),
  [CLEAR_RULES_VALIDATION]:
    (state: FormRulesState, { form }: FormRulesAction): FormRulesState => ({
      ...state,
      [form]: initialState[form]
    })
};

export default createReducer(initialState, actionHandlers);
