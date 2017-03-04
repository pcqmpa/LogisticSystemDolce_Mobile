/**
 * Module with the redux store configuration.
 * @module src/utils/configure-store
 */
// Redux.
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

/**
 * Create a composed store.
 * @param {Object} reducers -> App reducer.
 * @param {Object} rootEpic -> App epic(redux-observable).
 * @returns {Object} -> Redux store.
 */
const configureStore = (
  reducers,
  rootEpic
) => {
  // Middlewares.
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const enhancer = applyMiddleware(epicMiddleware);

  return createStore(reducers, enhancer);
};

export default configureStore;
