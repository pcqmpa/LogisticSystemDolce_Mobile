/**
 * Module with the app Screens component.
 * @module src/Screens
 */
// React - Router.
import React from 'react';
import { Route, Switch } from 'react-router-native';

// App Config.
import * as screens from './constants/screens';

// Components.
import {
  CameraView,
  Login,
  Main,
  NotDelivered,
  PicturePreview,
  Orders,
  OrderDetails,
  Zones
} from './containers/';
import Components from './containers/Orders/Components';

// Utils.
import configScreen from './utils/configure-screen';

/**
 * The app Routes component.
 * It Wraps the app routes to be manage from the client and the server.
 * @returns {ReactElement} -> The react component.
 */
const Screens = () => (
  <Main>
    <Switch>
      <Route
        exact
        path={screens.LOGIN}
        component={configScreen(Login)}
      />
      <Route
        path={screens.ZONES}
        component={configScreen(Zones)}
      />
      <Route
        path={screens.ORDERS}
        component={configScreen(Orders)}
      />
      <Route
        path={screens.ORDER_DETAILS}
        component={configScreen(OrderDetails)}
      />
      <Route
        path={screens.ORDER_NOT_DELIVERED}
        component={configScreen(NotDelivered)}
      />
      <Route
        path={screens.PICTURE_PREVIEW}
        component={configScreen(PicturePreview)}
      />
      <Route
        path={screens.CAMERA_VIEW}
        component={CameraView}
      />
      <Route
        path={screens.COMPONENT_VALHALLA}
        component={Components}
      />
    </Switch>
  </Main>
);

export default Screens;
