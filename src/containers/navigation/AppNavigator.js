/**
 * Module with the app naviation implementation.
 * @module src/containers/naviation/AppNavigator
 */
// React.
import React from 'react';

// Components.
import { Scene } from '../../components/';
import {
  Navigator,

  Login,
  Orders,
  Order,
  PicturePreview
} from '../';

// Constants.
import * as scenes from '../../constants/scenes';

const AppNavigator = () => (
  <Navigator>
    <Scene name={scenes.LOGIN} component={Login} />
    <Scene name={scenes.ORDERS} component={Orders} />
    <Scene name={scenes.ORDER} component={Order} />
    <Scene name={scenes.PICTURE_PREVIEW} component={PicturePreview} />
  </Navigator>
);

export default AppNavigator;
