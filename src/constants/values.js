/**
 * Module with core values of the app.
 * @module src/constants/values
 */
// Endpoint.
export const API_SERVICE_URL = (true) ? 'http://192.168.1.59:3001' : 'http://104.236.70.93';

// Storage.
export const USER_DATA_EXPIRATION = 1000 * 3600 * 24 * 10;
export const CURRENT_ORDERS_EXPIRATION = 1000 * 3600 * 24 * 10;

// Security.
export const TOKEN_SECRET = '555491b31ac73c65cabbecf4b8c0867e36356378';
