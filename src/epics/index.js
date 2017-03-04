/**
 * Module with the root redux-observable epic.
 * @module src/epics/
 */
// Redux Observable.
import { combineEpics } from 'redux-observable';

// Epics.
import login from './login';


const rootEpic = combineEpics(
  login
);

export default rootEpic;
