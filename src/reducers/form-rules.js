/**
 * Module with the form rules reducer.
 * @module src/reducers/form-rules
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

  REQUIRED,
  OPTIONAL
} from '../constants/types';

/**
 * Optional rule.
 * @type {Object}
 */
const optionalRule = {
  rule: OPTIONAL,
  valid: true
};

/**
 * Form initial and default rule.
 * @type {Object}
 */
const requiredRule = {
  rule: REQUIRED,
  valid: true
};

/**
 * Create a required rule.
 * @param {String} type -> The type of the rule.
 * @returns {Object} -> The rule.
 */
const createRule = (type = STRING) => ({
  ...requiredRule,
  type
});

/**
 * Login Form.
 * @type {Object}
 */
const loginForm = {
  username: createRule(),
  password: createRule()
};

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState = {
  loginForm
};

/**
 * Form rules action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [UPDATE_RULES_VALIDATION]: (state, { form, data }) => ({
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
  [CLEAR_RULES_VALIDATION]: (state, { form }) => ({
    ...state,
    [form]: initialState[form]
  })
};

export default createReducer(initialState, actionHandlers);

