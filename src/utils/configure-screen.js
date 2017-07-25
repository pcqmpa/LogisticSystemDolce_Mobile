/**
 * Module with the container components configuration utility.
 * @module src/shared/utils/config-container
 * @flow
 */
// React - Redux.
import React, { Component } from 'react';
import { Animated } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Types.
import type {
  AppState,
  ConfigScreenData,
  ConfigScreenProps,
  ConfigScreenState,
  Order,
  ReduxDispatch,
  Resume,
  Validator
} from './app-types';

// Libs.
import validator from '../libs/validator';

// Actions.
import {
  initCurrentScreen,
  setOrder,
  setScreenDefaultState,
  showToast
} from '../actions/common';
import { updateRules } from '../actions/form-rules';

// Constants.
import { ERROR } from '../constants/colors';
import { VALIDATION_ERROR } from '../constants/messages';
import { ORDER_DETAILS, PICTURE_PREVIEW } from '../constants/screens';
import { OrderStateEnum } from '../constants/types';

/**
 * Utilty to do some pre-configuration on top
 * of the container components of the app.
 * @param {ReactElement} WrappedContainer -> The container component.
 * @returns {ReactElement} -> The configured component.
 */
const configScreen = (WrappedContainer: ReactClass<any>) => {
  class ConfiguredScreen extends Component {
    state: ConfigScreenState;
    props: ConfigScreenProps;
    validator: Validator;
    initData: ConfigScreenData;

    static defaultProps = {
      user: {
        isAuth: false
      }
    };

    constructor(props: any, context: any) {
      super(props, context);

      this.state = {
        fadeScreen: new Animated.Value(0)
      };

      this.initData = {};

      this.validator = validator.init(
        (resume: Resume, form: string) => {
          this.props.updateRules(form, resume);
        },
        (resume: Resume, form: string) => {
          this.props.updateRules(form, resume);
          this.props.showToast(VALIDATION_ERROR, ERROR);
        }
      );
    }

    componentDidMount() {
      // Set default state of the screen.
      this.props.setScreenDefaultState();

      // Initialize the screen.
      this.props.initCurrentScreen();

      // Initialize the screen transition animation.
      Animated.timing(this.state.fadeScreen, {
        toValue: 1,
        duration: 500
      }).start();
    }

    componentWillMount() {
      // Initialize the screen data.
      this.initData = this.initScreen();
    }

    initScreen() {
      const {
        currentOrder,
        match,
        orders
      } = this.props;

      if (match.path === ORDER_DETAILS) {
        const { orderId } = match.params;
        const selectedOrder: Order = orders.find((order: Order): boolean => (
          order.id === orderId
        )) || { pictures: {} };

        this.props.setOrder(selectedOrder.NumPedido);
      }

      if (match.path === PICTURE_PREVIEW) {
        const selectedOrder: Order = orders.find((order: Order) => (
          order.NumPedido === currentOrder
        )) || { pictures: {} };

        return { changeDisabled: selectedOrder.state === OrderStateEnum.DELIVERED };
      }

      return {};
    }

    renderScreen() {
      const { screenLoaded } = this.props;

      if (!screenLoaded) {
        return null;
      }

      return (
        <WrappedContainer
          validator={this.validator}
          {...this.props}
          {...this.initData}
        />
      );
    }

    render() {
      return (
        <Animated.View style={{ opacity: this.state.fadeScreen }}>
          {this.renderScreen()}
        </Animated.View>
      );
    }
  }

  const mapStateToProps = ({ common, orders, user }: AppState) => ({
    currentOrder: common.order,
    orders,
    screenLoaded: common.screenLoaded,
    user
  });

  const mapDispatchToProps = (dispatch: ReduxDispatch) => (
    bindActionCreators({
      initCurrentScreen,
      setOrder,
      setScreenDefaultState,
      showToast,
      updateRules
    }, dispatch)
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfiguredScreen);
};

export default configScreen;
