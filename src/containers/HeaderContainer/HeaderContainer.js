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

// Components.
import { Header } from '../../components/';

// Actions.
import { logoutUser } from '../../actions/user';

// Constants.
import {
  ORDERS,
  LOGIN,
  ORDER_DETAILS,
  PICTURE_PREVIEW
} from '../../constants/screens';
import {
  ORDERS_TITLE,
  PICTURE_PREVIEW_TITLE
} from '../../constants/strings';

// Types.
import type {
  AppState,
  ComputedProps,
  HeaderContainerProps,
  ReduxDispatch
} from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
class HeaderContainer extends Component {
  props: HeaderContainerProps;

  titles: ComputedProps = {
    [ORDERS]: ORDERS_TITLE,
    [PICTURE_PREVIEW]: PICTURE_PREVIEW_TITLE
  };

  handleLogoutPress = () => {
    this.props.logoutUser();
  };

  handleRefreshPress = () => {
    // TODO: Add actual functionality.
    console.log('REFRESH');
  };

  getCurrentContent(props: HeaderContainerProps) {
    const { currentPath, order } = props;

    const title = (currentPath !== ORDER_DETAILS)
      ? this.titles[currentPath] : order;

    // Configure Logout Icon.
    const showLogout = currentPath !== LOGIN;
    const logoutIcon = {
      onPress: this.handleLogoutPress,
      show: showLogout
    };

    // Configure Refresh Icon.
    const showRefresh = currentPath === ORDERS;
    const refreshIcon = {
      onPress: this.handleRefreshPress,
      show: showRefresh
    };

    const hideHeader = currentPath === LOGIN;

    return {
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
      hideHeader,
      logoutIcon,
      refreshIcon,
      title
    } = this.getCurrentContent(this.props);

    return (
      <Header
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
    logoutUser
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
