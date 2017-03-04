/**
 * Module with the app root reducer.
 * @module src/reducers/
 */
// Redux.
import { combineReducers } from 'redux';

// Reducer.
import navigation from './navigation';

// Route Reducer.
export default combineReducers({
  navigation
});
