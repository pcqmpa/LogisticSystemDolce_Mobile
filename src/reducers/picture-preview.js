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
  CLEAR_PICTURE_URI,
  CLEAR_RETAKE_PICTURE,
  SET_PICTURE_TO_PREVIEW,
  SET_PICTURE_TYPE,
  SET_PICTURE_URI,
  SET_RETAKE_PICTURE
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
  firstPreview: false,
  picture: '',
  pictureType: '',
  retakePicture: false
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
      firstPreview: false,
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
      firstPreview: true,
      picture: pictureUri
    }),
  [SET_RETAKE_PICTURE]: (state: PictureState): PictureState => ({
    ...state,
    retakePicture: true
  }),
  [CLEAR_PICTURE_URI]: (state: PictureState): PictureState => ({
    ...state,
    picture: ''
  }),
  [CLEAR_RETAKE_PICTURE]: (state: PictureState): PictureState => ({
    ...state,
    retakePicture: false
  }),
  [CLEAR_PICTURE_PREVIEW]: (): PictureState => (initialState)
};

export default createReducer(initialState, actionHandlers);
