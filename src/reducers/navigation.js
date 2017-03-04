/**
 * Module with the navigation reducer.
 * @module src/shared/reducers/data-table-reducer
 */
// React Native.
import { NavigationExperimental } from 'react-native';

// Redux.
import { createReducer } from 'redux-create-reducer';

// Utils.
import shortId from 'shortid';

// Actions.
import {
  POP,
  PUSH,
  REPLACE
} from '../constants/actions';

// Constants.
import {
  LOGIN,
  ORDERS,
  ORDER,
  PICTURE_PREVIEW
} from '../constants/scenes';
import {
  LOGIN_LABEL,
  ORDERS_LABEL,
  ORDER_LABEL,
  PICTURE_PREVIEW_LABEL
} from '../constants/strings';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Small helper to create a scene signature.
 * @param {String} name -> The scene name.
 * @param {String} lable -> The scene label.
 * @returns {Object} -> The scene signature.
 */
const createSceneSign = (name, label) => ({ name, label });

/**
 * Whole scenes state.
 * @type {Object}
 */
const scenes = {
  [LOGIN]: createSceneSign(LOGIN, LOGIN_LABEL),
  [ORDERS]: createSceneSign(ORDERS, ORDERS_LABEL),
  [ORDER]: createSceneSign(ORDER, ORDER_LABEL),
  [PICTURE_PREVIEW]: createSceneSign(PICTURE_PREVIEW, PICTURE_PREVIEW_LABEL)
};

/**
 * Initial scene in the state.
 * @type {Object}
 */
const initialScene = {
  key: shortId.generate(),
  name: LOGIN,
  label: LOGIN_LABEL
};

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  index: 0,
  routes: [initialScene],
  scenes
};

//
// Handlers.
// -----------------------------------------------------------------------------
const { StateUtils } = NavigationExperimental;

/**
 * The router action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [POP]: state => ({
    ...state,
    ...StateUtils.pop(state)
  }),
  [PUSH]: (state, { key, scene }) => ({
    ...state,
    ...StateUtils.push(state, {
      key,
      ...state.scenes[scene]
    })
  }),
  [REPLACE]: (state, { key, scene }) => ({
    ...state,
    ...StateUtils.replace(state, {
      key,
      ...state.scenes[scene]
    })
  })
};

export default createReducer(initialState, actionHandlers);
