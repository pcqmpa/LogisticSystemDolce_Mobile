/**
 * Module with the root redux-observable epic.
 * @module src/epics/
 */
// Redux Observable.
import { combineEpics } from 'redux-observable';

// Epics.
import toast from './toast';
import login from './login';


const rootEpic = combineEpics(
  toast,
  login
);

export default rootEpic;
