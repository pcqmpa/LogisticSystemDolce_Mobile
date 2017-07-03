/**
 * Module with the picture preview actions.
 * @module src/actions/picture-preview
 * @flow
 */
// Constants.
import {
  CLEAR_PICTURE_PREVIEW,
  CLEAR_PICTURE_URI,
  CLEAR_RETAKE_PICTURE,
  SET_PICTURE_TO_PREVIEW,
  SET_PICTURE_TYPE,
  SET_PICTURE_URI,
  SET_RETAKE_PICTURE,
  SHOT_PICTURE,
  STORE_PICTURE
} from '../constants/actions';

// Types.
import type {
  Action,
  CameraElement,
  PictureAction,
  PictureType,
  PictureTypeAction,
  PictureUriAction,
  ShotPictureAction
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
});

/**
 * Action to change the CameraView state to retake picture.
 * @returns {Object} -> The action
 */
export const setRetakePicture = (): Action => ({
  type: SET_RETAKE_PICTURE
});

/**
 * Action to set a picture uri the first time a particular
 * picture is taked to display it to the user on the
 * preview screen.
 * @param {String} pictureUri -> The uri of the picture.
 * @returns {Object} -> The action.
 */
export const setPictureUri = (pictureUri: string): PictureUriAction => ({
  type: SET_PICTURE_URI,
  pictureUri
});

/**
 * Action to take asynchronously a picture and set it to the store.
 * @param {Object} cameraElement -> The camera reference.
 * @param {Boolean} retake -> If the state of the camera is on retake.
 * @returns {Object} -> The action.
 */
export const shotPicture =
  (cameraElement: CameraElement, retake: boolean): ShotPictureAction => ({
    type: SHOT_PICTURE,
    cameraElement,
    retake
  });

/**
 * Action to store a acepted picture in the app storage.
 * @returns {Object} -> The action.
 */
export const storePicture = (): Action => ({
  type: STORE_PICTURE
});

/**
 * Action to clear the current stored picture uri.
 * @returns {Object} -> The action.
 */
export const clearPictureUri = (): Action => ({
  type: CLEAR_PICTURE_URI
});

/**
 * Action to clear the retake picture state.
 * @returns {Object} -> The action.
 */
export const clearRetakePicture = (): Action => ({
  type: CLEAR_RETAKE_PICTURE
});

/**
 * Action to clear the picture on preview.
 * @returns {Object} -> The action.
 */
export const clearPicturePreview = (): Action => ({
  type: CLEAR_PICTURE_PREVIEW
});
