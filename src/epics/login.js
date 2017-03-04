// TODO: see if this can be refactor.
/**
 * Module with the login epic.
 * @module src/epics/login.
 */
// Rxjs.
import 'rxjs/add/operator/map';

// Actions.
import { loginSuccess } from '../actions/login';

// Constants.
import { LOGIN_REQUEST } from '../constants/actions';

/**
 * Epic to handle the user login flow.
 * @param {Object} action$ -> Redux action wrapped.
 * @returns {Symbol.Observable} -> The epic definition.
 */
const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST)
    .map(() => (
      loginSuccess({})
    ));

export default loginEpic;
