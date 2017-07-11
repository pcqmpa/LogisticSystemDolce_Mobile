/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Node.
import { createMemoryHistory } from 'history';

// React - Redux.
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';

// Types.
import type { ReduxStore } from './src/utils/app-types';

// App.
import reducers from './src/reducers/';
import rootEpic from './src/epics/';

// Components.
import Screens from './src/Screens';

// Actions.
import { initNetWatcher } from './src/actions/common';

// Utils.
import configureStore from './src/utils/configure-store';

//
// Initialize App
// -----------------------------------------------------------------------------

// setJSExceptionHandler((err) => {
//   console.log(err); // eslint-disable-line
// });

const history = createMemoryHistory();
const store: ReduxStore = configureStore(reducers, rootEpic, history);

store.dispatch(initNetWatcher());

//
// Render App
// -----------------------------------------------------------------------------

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Screens />
    </ConnectedRouter>
  </Provider>
);

AppRegistry.registerComponent('LogisticDolce', () => (App));
