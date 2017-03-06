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
  updateUsernameInput,
  updatePasswordInput
} from '../../actions/login';
import { toggleLoading } from '../../actions/common';

// Utils.
import { noop } from '../../utils/';

// Constants.
import {
  USERNAME_INPUT,
  PASSWORD_INPUT
} from '../../constants/strings';

// Styles.
import { loginStyles } from '../../styles/containers/';

class Login extends Component {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    updateUsernameInput: PropTypes.func,
    updatePasswordInput: PropTypes.func,
    toggleLoading: PropTypes.func
  };

  static defaultProps = {
    username: '',
    password: '',
    updateUsernameInput: noop,
    updatePasswordInput: noop,
    toggleLoading: noop
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
    this.props.toggleLoading();
  };

  render() {
    const {
      username,
      password
    } = this.props;

    return (
      <View style={loginStyles.container}>
        <View style={loginStyles.containerItems}>
          <TextForm
            value={username}
            placeholder={USERNAME_INPUT}
            onChangeText={this.handleUsernameUpdates}
          />
        </View>
        <View style={loginStyles.containerItems}>
          <TextForm
            value={password}
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

const mapStateToProps = state => ({ ...state.login });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateUsernameInput,
    updatePasswordInput,
    toggleLoading
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
