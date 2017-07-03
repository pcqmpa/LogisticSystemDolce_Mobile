/**
 * Module with the HeaderContainer component, that controls
 * the state of the Header component.
 * @module src/containers/HeaderContainer/HeaderContainer
 * @flow
 */
// React - Redux.
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

// Types.
import type {
  AppState,
  ComputedProps,
  HeaderContainerProps,
  ReduxDispatch
} from '../../utils/app-types';

// Components.
import { Header } from '../../components/';

// Actions.
import { requestOrders } from '../../actions/orders';
import { clearPicturePreview } from '../../actions/picture-preview';
import { logoutUser } from '../../actions/user';

// Constants.
import { LOGOUT_SUCCESS } from '../../constants/messages';
import * as screens from '../../constants/screens';
import {
  ORDERS_TITLE,
  PICTURE_PREVIEW_TITLE
} from '../../constants/strings';

//
// Component.
// -----------------------------------------------------------------------------
class HeaderContainer extends Component {
  props: HeaderContainerProps;

  titles: ComputedProps = {
    [screens.ORDERS]: ORDERS_TITLE,
    [screens.PICTURE_PREVIEW]: PICTURE_PREVIEW_TITLE
  };

  handleBackButtonPress = () => {
    this.props.goBack();

    if (this.props.currentPath.includes(screens.ORDER_DETAILS_PATH)) {
      this.props.clearPicturePreview();
    }
  };

  handleLogoutPress = () => {
    this.props.logoutUser(LOGOUT_SUCCESS);
  };

  handleRefreshPress = () => {
    this.props.requestOrders();
  };

  getCurrentContent(props: HeaderContainerProps) {
    const { currentPath, order } = props;

    const title = (!currentPath.includes(screens.ORDER_DETAILS_PATH))
      ? this.titles[currentPath] : `#${order}`;

    // Configure Back Button.
    const showBackButton = (
      currentPath.includes(screens.ORDER_DETAILS_PATH) ||
      currentPath === screens.PICTURE_PREVIEW
    );
    const backButton = {
      onPress: this.handleBackButtonPress,
      show: showBackButton
    };

    // Configure Logout Icon.
    const showLogout = currentPath !== screens.LOGIN;
    const logoutIcon = {
      onPress: this.handleLogoutPress,
      show: showLogout
    };

    // Configure Refresh Icon.
    const showRefresh = currentPath === screens.ORDERS;
    const refreshIcon = {
      onPress: this.handleRefreshPress,
      show: showRefresh
    };

    const hideHeader = currentPath === screens.LOGIN || currentPath === screens.CAMERA_VIEW;

    return {
      backButton,
      hideHeader,
      logoutIcon,
      refreshIcon,
      title
    };
  }

  render() {
    const { screenLoaded } = this.props;

    if (!screenLoaded) {
      return null;
    }

    const {
      backButton,
      hideHeader,
      logoutIcon,
      refreshIcon,
      title
    } = this.getCurrentContent(this.props);

    return (
      <Header
        backButton={backButton}
        hide={hideHeader}
        logoutIcon={logoutIcon}
        refreshIcon={refreshIcon}
      >
        {title}
      </Header>
    );
  }
}

const mapStateToProps = ({ common, router }: AppState) => ({
  currentPath: router.location.pathname,
  order: common.order,
  screenLoaded: common.screenLoaded
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    clearPicturePreview,
    goBack,
    logoutUser,
    requestOrders
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
