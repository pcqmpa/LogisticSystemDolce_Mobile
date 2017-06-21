/**
 * Module with the app Routes component.
 * @module src/Routes
 */
// React - Router.
import React from 'react';
import { Route, Switch } from 'react-router-native';

// App Config.
import * as screens from './constants/screens';

// Components.
import {
  Login,
  Main,
  PicturePreview,
  Orders,
  OrderDetails
} from './containers/';

// Utils.
import configScreen from './utils/configure-screen';

/**
 * The app Routes component.
 * It Wraps the app routes to be manage from the client and the server.
 * @returns {ReactElement} -> The react component.
 */
const Routes = () => (
  <Main>
    <Switch>
      <Route
        exact
        path={screens.LOGIN}
        component={configScreen(Login)}
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
        path={screens.PICTURE_PREVIEW}
        component={configScreen(PicturePreview)}
      />
    </Switch>
  </Main>
);

export default Routes;
