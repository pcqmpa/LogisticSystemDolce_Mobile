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
  ConfigScreenOptions,
  ConfigScreenProps,
  ConfigScreenState,
  ReduxDispatch,
  Resume,
  Validator
} from './app-types';

// Libs.
import validator from '../libs/validator';

// Actions.
import {
  initCurrentScreen,
  setScreenDefaultState,
  showToast
} from '../actions/common';
import { updateRules } from '../actions/form-rules';

// Constants.
import { ERROR } from '../constants/colors';
import { VALIDATION_ERROR } from '../constants/messages';
import { LOGIN } from '../constants/screens';

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

    renderScreen() {
      const { match, user, screenLoaded } = this.props;

      if (!screenLoaded) {
        return null;
      }

      if ((!user.isAuth) && match.path !== LOGIN) {
        return (
          <WrappedContainer
            validator={this.validator}
            {...this.props}
          />
        );
      }

      return (
        <WrappedContainer
          validator={this.validator}
          {...this.props}
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

  const mapStateToProps = ({ common, user }: AppState) => ({
    screenLoaded: common.screenLoaded,
    user
  });

  const mapDispatchToProps = (dispatch: ReduxDispatch) => (
    bindActionCreators({
      initCurrentScreen,
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
