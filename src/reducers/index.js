/**
 * Module with the app root reducer.
 * @module src/reducers/
 */
// Redux.
import { combineReducers } from 'redux';

// Reducer.
import navigation from './navigation';
import formRules from './form-rules';
import common from './common';
import login from './login';
import user from './user';
import orders from './orders';

// Route Reducer.
export default combineReducers({
  navigation,
  formRules,
  common,
  login,
  user,
  orders
});
