/**
 * Module with contant app values.
 * @module src/constants/values
 */
// React.
import { Dimensions } from 'react-native';

// Window.
const dimensions = Dimensions.get('window');
export const WINDOW_WIDTH = dimensions.width;
export const WINDOW_HEIGHT = dimensions.height;

// Flex.
export const FLEX_DOUBLE = 2;
export const FLEX_FIT = 1;
export const FLEX_STATIC = 0;

// Texts.
export const SMALL_TEXT = 14;
export const REGULAR_TEXT = 18;
export const LARGE_TEXT = 22;
export const SUPER_TEXT = 26;
export const HEADING_TEXT = 32;

// Common.
export const BASE_BODER = 4;

// Text Form.
export const TEXT_FORM_BORDER_WIDTH = 1;
export const TEXT_FORM_ICON_SIZE = 20;
export const TEXT_FORM_PADDING = 8;
export const TEXT_FORM_RIGHT = 10;
export const TEXT_FORM_TOP = 15;

// Button.
export const BUTTON_ACTIVE_OPACITY = 1;
export const BUTTON_DISABLE_OPACITY = 0.7;
export const BUTTON_ELEVATION = 2;
export const BUTTON_PADDING = 14;

// Check.
export const CHECK_SIZE = 24;
export const CHECK_PADDING = 4;

// Card.
export const CARD_CONTAINER_PADDING = 9;
export const CARD_CONTAINER_SIZE = 105;
export const CARD_MAIN_FIELD_HEIGHT = 25;
export const CARD_MAIN_FIELD_WITDH = 180;
export const CARD_SECONDARY_FIELD_HEIGHT = 25;
export const CARD_SECONDARY_FIELD_WIDTH = 100;

// DataItem.
export const DATAITEM_CONTAINER_HEIGHT = 60;
export const DATAITEM_KEY_CONTAINER_SIZE = 40;
export const DATAITEM_PADDING = 9;
export const DATAITEM_VALUE_CONTAINER_SIZE = 60;

// DataImage,
export const DATAIMAGE_IMAGE_SIZE = 50;
export const DATAIMAGE_ICON_SIZE = 40;

// Toast.
export const TOAST_BOTTOM = 70;
export const TOAST_HEIGHT = 100;
export const TOAST_PADDING = 9;
export const TOAST_WIDTH = 200;

// Header.
export const HEADER_COLUMN_SIZE = 70;
export const HEADER_HEIGHT = 50;
export const HEADER_ICON_COLUMN_SIZE = 15;

// Divider.
export const DIVIDER_HEIGHT = 1;

// Storage.
export const USER_DATA_EXPIRATION = 1000 * 3600 * 24 * 10;
export const CURRENT_ORDERS_EXPIRATION = 1000 * 3600 * 24 * 10;

// Times.
export const REDIRECT_DELAY = 400;
export const TOAST_DISPLAY_DELAY = 200;
export const TOAST_HIDE_DELAY = 2000;
export const LOADING_HIDE_DELAY = 400;
export const SYNC_DELAY = 400;

// Login.
export const LOGIN_FORM_SIZE = 30;
export const LOGIN_FORM_FIELD_PADDING = 10;

// OrderDetails.
export const ORDER_DETAILS = {
  ICON_CONTAINER_HEIGHT: 200,
  ICON_SIZE: 150,
  SUBMIT_CONTAINER_PADDING_BOTTOM: 100,
  SUBMIT_CONTAINER_PADDING_LEFT: 5,
  SUBMIT_CONTAINER_PADDING_RIGHT: 5,
  SUBMIT_CONTAINER_PADDING_TOP: 20
};

// CameraView.
export const SHOT_PICTURE_DELAY = 200;
export const CAMERA_VIEW = {
  BACK_BUTTON_FONT_SIZE: 22,
  BACK_BUTTON_HEIGHT: 50,
  BACK_BUTTON_LEFT: 15,
  BACK_BUTTON_TOP: 15,
  BACK_BUTTON_WIDTH: 50,
  SHOT_BUTTON_FONT_SIZE: 40,
  SHOT_BUTTON_MARGIN: 50,
  SHOT_BUTTON_PADDING: 5,
  SHOT_BUTTON_RADIUS: 100
};

// PicturePreview.
export const PICTURE_PREVIEW = {
  BUTTON_COLUMN_SIZE: 50,
  BUTTON_WRAPPER_PADDING: 20,
  BUTTONS_CONTAINER_PADDING: 20,
  PICTURE_CONTAINER_HEIGHT: WINDOW_HEIGHT - HEADER_HEIGHT - 140,
  PICTURE_CONTAINER_PADDING: 20
};
