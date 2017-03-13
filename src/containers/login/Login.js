/**
 * Module with the login container component.
 * @module src/containers/login/Login
 */
// React - Redux.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// React Native.
import {
  View
} from 'react-native';

// Components.
import {
  Button,
  TextForm
} from '../../components/';

// Actions.
import {
  requestLogin,
  updateUsernameInput,
  updatePasswordInput
} from '../../actions/login';
import { updateRules } from '../../actions/form-rules';
import { showToast } from '../../actions/common';

// Lib.
import validator from '../../lib/validator';

// Utils.
import { noop } from '../../utils/';

// Constants.
import { ARGS_ABSENCE } from '../../constants/messages';
import {
  USERNAME_INPUT,
  PASSWORD_INPUT,

  LOGIN_RULES
} from '../../constants/strings';

// Styles.
import { loginStyles } from '../../styles/containers/';

class Login extends Component {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    showToast: PropTypes.func,
    requestLogin: PropTypes.func,
    updateUsernameInput: PropTypes.func,
    updatePasswordInput: PropTypes.func,

    formRules: PropTypes.shape({
      username: PropTypes.object,
      password: PropTypes.object
    }),
    updateRules: PropTypes.func
  };

  static defaultProps = {
    username: '',
    password: '',
    showToast: noop,
    requestLogin: noop,
    updateUsernameInput: noop,
    updatePasswordInput: noop,

    formRules: {},
    updateRules: noop
  };

  /**
   * Triggers the update of the username input.
   * @param {String} value -> The updated value of the input.
   */
  handleUsernameUpdates = (value) => {
    this.props.updateUsernameInput(value);
  };

  /**
   * Triggers the update of the password input.
   * @param {String} value -> The updated value of the input.
   */
  handlePasswordUpdates = (value) => {
    this.props.updatePasswordInput(value);
  };

  handleLoginSubmit = () => {
    const {
      username,
      password,
      formRules
    } = this.props;
    const user = { username, password };

    const formValidation = validator.run(formRules, user);

    this.props.updateRules(
      LOGIN_RULES,
      formValidation.resume
    );

    if (formValidation.valid) {
      this.props.requestLogin(user);
    } else {
      this.props.showToast(ARGS_ABSENCE);
    }
  };

  render() {
    const {
      username,
      password,
      formRules
    } = this.props;

    return (
      <View style={loginStyles.container}>
        <View style={loginStyles.containerItems}>
          <TextForm
            value={username}
            valid={formRules.username.valid}
            placeholder={USERNAME_INPUT}
            onChangeText={this.handleUsernameUpdates}
          />
        </View>
        <View style={loginStyles.containerItems}>
          <TextForm
            value={password}
            valid={formRules.password.valid}
            placeholder={PASSWORD_INPUT}
            onChangeText={this.handlePasswordUpdates}
            secureTextEntry
          />
        </View>
        <View
          style={[loginStyles.containerItems, loginStyles.buttonContainer]}
        >
          <Button onPress={this.handleLoginSubmit}>
            Ingresar
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.login,
  formRules: state.formRules.loginForm
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    requestLogin,
    updateUsernameInput,
    updatePasswordInput,
    updateRules,
    showToast
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
