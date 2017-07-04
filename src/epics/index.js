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
import netWatcher from './net-watcher';
import orderDelivery from './order-delivery';
import orders from './orders';
import picture from './picture';
import pictureStorage from './picture-storage';
import toast from './toast';
import updateStore from './update-store';

const rootEpic = combineEpics(
  authentication,
  initScreen,
  logout,
  netWatcher,
  orderDelivery,
  orders,
  picture,
  pictureStorage,
  toast,
  updateStore
);

export default rootEpic;
