/**
 * Module with the screen initialization epic.
 * It inits all the app state based on the curren screen.
 * @module src/epics/init-screen
 * @flow
 */
// React - Redux.
// import { replace } from 'react-router-redux';

// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

// Types.
import type {
  AppState,
  AuthenticateResult,
  NotifyErrorOptions,
  ReduxStore,
  User
} from '../utils/app-types';

// Observables.
import { hideLoadingAction } from './common';
import notifyError$ from './notify-error';

// Actions.
import {
  setScreenLoaded,
  showLoading,
  showToast
} from '../actions/common';

// Libs.
import debug from '../libs/debugger';

// Utils.
import storage from '../utils/storage-services';

// Constants.
import { INIT_CURRENT_SCREEN } from '../constants/actions';
import { ERROR } from '../constants/colors';
import * as screens from '../constants/screens';
import { AUTH, STORAGE } from '../constants/types';

const initAuthentication = (user: User): Observable<*> => {
  if (user.isAuth) {
    return Observable.of({
      userData: user,
      wasOnStore: false
    });
  }
  return storage.getUserData()
    .map((userData: User) => ({
      userData,
      wasOnStore: true
    }));
};

const initScreens = (store: ReduxStore): Observable<*> => {
  const {
    router,
    user
  }: AppState = store.getState();

  return initAuthentication(user)
    .concatMap(({ userData }: AuthenticateResult): Observable<*> => {
      if (userData.error) {
        const errorOptions: NotifyErrorOptions = {
          location: router.location.pathname
        };
        return notifyError$(STORAGE, AUTH, errorOptions);
      }

      return Observable.concat(
        Observable.of(setScreenLoaded()),
        hideLoadingAction()
      ).startWith(showLoading());
    })
    .catch((err: Error) => (
      Observable.of(showToast(
        debug.logInternalError(err, 'Error on init screens: line: 62'),
        ERROR
      ))
    ));
};

const initLoginPage = (user: User) => (
  initAuthentication(user)
    .mergeMap(({ userData }: AuthenticateResult): Observable<*> => {
      if (!userData.error) {
        const errorOptions: NotifyErrorOptions = {
          location: screens.LOGIN
        };
        return notifyError$(STORAGE, AUTH, errorOptions)
          .startWith(showLoading());
      }

      return Observable.concat(
        Observable.of(setScreenLoaded()),
        hideLoadingAction()
      );
    })
    .catch((err: Error): Observable<*> => (
      Observable.of(showToast(
        debug.logInternalError(err, 'Error on init login: line: 74'),
        ERROR
      ))
    ))
);

/**
 * Initialize the current screen based on the
 * current state of the app.
 */
const initScreenEpic =
  (action$: Observable<*>, store: ReduxStore): Observable<*> => (
    action$.ofType(INIT_CURRENT_SCREEN)
      .mergeMap(() => {
        const { router, user } = store.getState();

        if (router.location.pathname === screens.LOGIN) {
          return initLoginPage(user);
        }

        return initScreens(store);
      })
  );

export default initScreenEpic;