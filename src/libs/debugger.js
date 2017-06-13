/**
 * Module with some debugger functions.
 * @module src/libs/debugger
 * @flow
 */
// Constants.
import { SYSTEM_ERROR } from '../constants/messages';

/**
 * Returns a message based on the env and
 * logs an error if exists.
 * @param {Error} [err] -> The system error.
 * @param {String} message -> The debug message.
 * @returns {String} -> With the actual message.
 */
const logInternalError = (err?: Error, message: string): string => {
  if (err) {
    console.error(err); // eslint-disable-line
  }

  return (process.env.NODE_ENV !== 'development') ? SYSTEM_ERROR : message;
};

export default { logInternalError };
