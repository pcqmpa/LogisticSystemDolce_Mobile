/**
 * Module with the app root reducer.
 * @module src/shared/reducers/
 */
// React - Redux.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import common from './common';
import formRules from './form-rules';
import loginForm from './login-form';
import orders from './orders';
import picturePreview from './picture-preview';
import user from './user';

// Root Reducer.
export default combineReducers({
  common,
  formRules,
  loginForm,
  orders,
  picturePreview,
  router: routerReducer,
  user
});
