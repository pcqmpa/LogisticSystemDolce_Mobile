/**
 * Module with the picture preview reducer.
 * @module src/reducers/picture-preview
 * @flow
 */
// Redux.
import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  CLEAR_PICTURE_PREVIEW,
  SET_PICTURE_TO_PREVIEW
} from '../constants/actions';

// Types.
import type {
  PictureAction,
  PictureState
} from '../utils/app-types';

//
// Initial State.
// -----------------------------------------------------------------------------

/**
 * Reducer initial state.
 * @type {Object}
 */
const initialState: PictureState = {
  picture: '',
  pictureType: ''
};

//
// Handlers.
// -----------------------------------------------------------------------------

/**
 * Login form action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [SET_PICTURE_TO_PREVIEW]:
    (state: PictureState, { picture, pictureType }: PictureAction): PictureState => ({
      ...state,
      picture,
      pictureType
    }),
  [CLEAR_PICTURE_PREVIEW]: (): PictureState => (initialState)
};

export default createReducer(initialState, actionHandlers);
