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
  SET_PICTURE_TO_PREVIEW,
  SET_PICTURE_TYPE,
  SET_PICTURE_URI
} from '../constants/actions';

// Types.
import type {
  PictureAction,
  PictureState,
  PictureTypeAction,
  PictureUriAction
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
 * Picture preview action handlers.
 * @type {Object}
 */
const actionHandlers = {
  [SET_PICTURE_TO_PREVIEW]:
    (state: PictureState, { picture, pictureType }: PictureAction): PictureState => ({
      ...state,
      picture,
      pictureType
    }),
  [SET_PICTURE_TYPE]:
    (state: PictureState, { pictureType }: PictureTypeAction): PictureState => ({
      ...state,
      pictureType
    }),
  [SET_PICTURE_URI]:
    (state: PictureState, { pictureUri }: PictureUriAction): PictureState => ({
      ...state,
      picture: pictureUri
    }),
  [CLEAR_PICTURE_PREVIEW]: (): PictureState => (initialState)
};

export default createReducer(initialState, actionHandlers);
