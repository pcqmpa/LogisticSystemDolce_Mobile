/**
 * Logistic System Dolce App
 * https://github.com/facebook/react-native
 * @flow
 */
// React - Redux.
import React from 'react';
import { Provider } from 'react-redux';

// React Native.
import {
  AppRegistry
} from 'react-native';

// Reducers.
import reducer from './src/reducers/';

// Epics.
import rootEpic from './src/epics/';

// Components.
import { AppNavigator } from './src/containers/';

// Utils.
import { configureStore } from './src/utils/';

const store = configureStore(reducer, rootEpic);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent('LogisticSystemDolce', () => App);
