/**
 * Module with the root redux-observable epic.
 * @module src/epics/
 */
// Redux Observable.
import { combineEpics } from 'redux-observable';

// Epics.
import authentication from './authentication';
import initScreen from './init-screen';
import logout from './logout';
import orders from './orders';
import picture from './picture';
import toast from './toast';

const rootEpic = combineEpics(
  authentication,
  initScreen,
  logout,
  orders,
  picture,
  toast
);

export default rootEpic;
