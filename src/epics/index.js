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
import orderDelivery from './order-delivery';
import pictureStorage from './picture-storage';
import toast from './toast';
import updateStore from './update-store';

const rootEpic = combineEpics(
  authentication,
  initScreen,
  logout,
  orders,
  picture,
  orderDelivery,
  pictureStorage,
  toast,
  updateStore
);

export default rootEpic;
