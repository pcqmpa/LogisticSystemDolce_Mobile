/**
 * Module with different kind of types required in the app.
 * @module src/shared/constants/types
 * @flow
 */
// Network Types.
export const NONE_NET = 'NONE';
export const WIFI_NET = 'WIFI';

// Keyboard Types.
export const DEFAULT_KEYBOARD = 'default';
export const DONE_KEYBOARD = 'done';

// Validation Types.
export const STRING = 'STRING';
export const NUMBER = 'NUMBER';
export const ARRAY = 'ARRAY';
export const OBJECT = 'OBJECT';
export const STORAGE = 'STORAGE';
export const REQUEST = 'REQUEST';
export const AUTH = 'AUTH';

// Message Types.
export const ERROR = 'error';
export const INFO = 'info';
export const SUCCESS = 'success';
export const BRAND = 'brand';
export const DEFAULT = 'default';

// Request Types.
export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';

// Form Types.
export const TEXT = 'text';
export const PASSWORD = 'password';
export const EMAIL = 'email';
export const DATE = 'date';
export const TIME = 'time';
export const SUBMIT = 'submit';
export const BUTTON = 'button';

export const HOURS = 'hours';
export const MINUTES = 'minutes';

// Form Rules.
export const REQUIRED = 'required';
export const OPTIONAL = 'optional';
export const RuleEnum = {
  [OPTIONAL]: OPTIONAL,
  [REQUIRED]: REQUIRED
};

// Pictures.
export const CODE = 'code';
export const PACKAGE = 'package';
export const PictureEnum = {
  [CODE]: CODE,
  [PACKAGE]: PACKAGE
};

// Animations.
export const FADE = 'fade';

// Image.
export const IMAGE_STRETCH = 'stretch';

// Order states.
export const OrderStateEnum = {
  DELIVERED: 'DELIVERED',
  NOT_DELIVERED: 'NOT_DELIVERED',
  OPEN: 'OPEN'
};

// Packages.
export const REWARDS = 'Premios';
