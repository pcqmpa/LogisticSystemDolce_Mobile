/**
 * Module with the router actions.
 * @module src/actions/routing
 */
// Utils.
import shortId from 'shortid';

// Constants.
import {
  POP,
  PUSH,
  REPLACE
} from '../constants/actions';

export const pop = () => ({ type: POP });

export const push = scene => ({
  type: PUSH,
  key: shortId.generate(),
  scene
});

export const replace = scene => ({
  type: REPLACE,
  key: shortId.generate(),
  scene
});
