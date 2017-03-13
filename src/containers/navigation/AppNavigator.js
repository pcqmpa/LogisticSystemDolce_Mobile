/**
 * Module with the app naviation implementation.
 * @module src/containers/naviation/AppNavigator
 */
// React.
import React from 'react';

// React Native.
import { View } from 'react-native';

// Components.
import { Scene } from '../../components/';
import {
  Navigator,
  Loading,
  ToastContainer,

  Login,
  Orders,
  Order,
  PicturePreview
} from '../';

// Constants.
import * as scenes from '../../constants/scenes';

// Styles.
import { appNavigatorStyles } from '../../styles/containers/';

const AppNavigator = () => (
  <View style={appNavigatorStyles.container}>
    <Navigator>
      <Scene name={scenes.LOGIN} component={Login} />
      <Scene name={scenes.ORDERS} component={Orders} />
      <Scene name={scenes.ORDER} component={Order} />
      <Scene name={scenes.PICTURE_PREVIEW} component={PicturePreview} />
    </Navigator>
    <Loading />
    <ToastContainer
      show
      message="Aasadafasf"
    />
  </View>
);

export default AppNavigator;
