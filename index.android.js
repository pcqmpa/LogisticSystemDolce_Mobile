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

// Types.
import type { ReduxStore } from './src/utils/app-types';

// App.
import reducers from './src/reducers/';
import rootEpic from './src/epics/';

// Components.
import Routes from './src/Routes';

// Utils.
import configureStore from './src/utils/configure-store';

//
// Initialize App
// -----------------------------------------------------------------------------

const history = createMemoryHistory();
const store: ReduxStore = configureStore(reducers, rootEpic, history);

//
// Render App
// -----------------------------------------------------------------------------

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

AppRegistry.registerComponent('LogisticDolce', () => (App));
