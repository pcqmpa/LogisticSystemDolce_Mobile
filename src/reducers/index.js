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

// Route Reducer.
export default combineReducers({
  navigation,
  formRules,
  common
});
