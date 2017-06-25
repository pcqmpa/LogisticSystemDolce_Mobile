/**
 * Module with the picture preview actions.
 * @module src/actions/picture-preview
 * @flow
 */
// Constants.
import {
  CLEAR_PICTURE_PREVIEW,
  SET_PICTURE_TO_PREVIEW,
  SET_PICTURE_TYPE
} from '../constants/actions';

// Types.
import type {
  Action,
  PictureAction,
  PictureType,
  PictureTypeAction
} from '../utils/app-types';

/**
 * Action to set a picture to be previewed.
 * @param {String} picture -> The picture location.
 * @returns {Object} -> The action.
 */
export const setPictureToPreview =
  (picture: string, pictureType: PictureType): PictureAction => ({
    type: SET_PICTURE_TO_PREVIEW,
    picture,
    pictureType
  });

/**
 * Action to set a picture type so that the picture preview
 * can set the picture to the order after taken the first picture.
 * @param {String} pictureType -> The type of the picture
 * @returns {Object} -> The action.
 */
export const setPictureType = (pictureType: PictureType): PictureTypeAction => ({
  type: SET_PICTURE_TYPE,
  pictureType
})

/**
 * Action to clear the picture on preview.
 * @returns {Object} -> The action.
 */
export const clearPicturePreview = (): Action => ({
  type: CLEAR_PICTURE_PREVIEW
});
