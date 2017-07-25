/**
 * Module with the redux store configuration.
 * @module src/utils/configure-store
 */
// Redux.
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'remote-redux-devtools'; // eslint-disable-line

/**
 * Create a composed store.
 * @param {Object} reducers -> The app reducer.
 * @param {Object} rootEpic -> The app epics.
 * @param {Object} history -> The router history.
 * @param {Object} initialState -> The initial state of the app.
 * @returns {Object} -> Redux store.
 */
const configureStore = (
  reducers,
  rootEpic,
  history,
  initialState = {}
) => {
  // Middlewares.
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const reduxRouterMiddleware = routerMiddleware(history);
  // TODO: Remove before shipping.
  // const composeEnhancers = composeWithDevTools({
  //   realtime: true
  // });
  // const enhancer = composeEnhancers(
  //   applyMiddleware(epicMiddleware, reduxRouterMiddleware)
  // );
  const enhancer = applyMiddleware(epicMiddleware, reduxRouterMiddleware);

  const store = createStore(reducers, initialState, enhancer);

  return store;
};

export default configureStore;
