/**
 * Module with the redux actions constants.
 * @module src/constants/actions
 */
// Navigation.
export const PUSH = 'PUSH';
export const POP = 'POP';
export const REPLACE = 'REPLACE';

// Loading.
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

// Toast.
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

// App Synchronization.
export const INIT_STORE = 'INIT_STORE';
export const UPDATE_APP_SYNCED = 'UPDATE_APP_SYNCED';

// Form Rules.
export const UPDATE_RULES_VALIDATION = 'UPDATE_RULES_VALIDATION';
export const CLEAR_RULES_VALIDATION = 'CLEAR_RULES_VALIDATION';

// Login.
export const UPDATE_USERNAME_INPUT = 'UPDATE_USERNAME_INPUT';
export const UPDATE_PASSWORD_INPUT = 'UDPATE_PASSWORD_INPUT';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const RESET_LOG_FAILED = 'RESET_LOG_FAILED';

// User.
export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

// Orders.
export const SET_ORDERS = 'SET_ORDERS';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';

export const RETRIEVE_ORDER_REQUEST = 'RETRIEVE_ORDER_REQUEST';
export const RETRIEVE_ORDER_SUCCESS = 'RETRIEVE_ORDER_SUCCESS';
export const RETRIEVE_ORDER_FAILED = 'RETRIEVE_ORDER_FAILED';
