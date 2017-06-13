/**
 * Module with the Login screen component.
 * @module src/containers/Login/Login
 * @flow
 */
// React.
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

// Types.
import type {
  AppState,
  LoginProps,
  ReduxDispatch
} from '../../utils/app-types';

// Components.
import {
  Button,
  Divider,
  TextForm
} from '../../components/';

// Actions.
import {
  updateLoginForm
} from '../../actions/login-form';

// Constants.
import {
  LOGIN_FORM,
  PASSWORD_FIELD,
  PASSWORD_PLACEHOLDER,
  USERNAME_FIELD,
  USERNAME_PLACEHOLDER
} from '../../constants/strings';

// Styles.
import loginStyles from './styles';

class Login extends Component {
  props: LoginProps;

  handleChangeField = (field: string) => (value: string) => {
    this.props.updateLoginForm(field, value);
  };

  handleSubmit = () => {
    const {
      formRules,
      password,
      username
    } = this.props;
    const form = {
      password,
      username
    };

    this.props.validator.run(formRules, form, LOGIN_FORM);
  }

  render() {
    const {
      password,
      username
    } = this.props;

    return (
      <View style={loginStyles.container}>
        <View style={loginStyles.form}>
          <Text style={loginStyles.heading}>
            Logística DOLCE
          </Text>
          <Divider />
          <View style={loginStyles.field}>
            <TextForm
              onChangeText={this.handleChangeField(USERNAME_FIELD)}
              placeholder={USERNAME_PLACEHOLDER}
              value={username}
            />
          </View>
          <View style={loginStyles.field}>
            <TextForm
              onChangeText={this.handleChangeField(PASSWORD_FIELD)}
              placeholder={PASSWORD_PLACEHOLDER}
              secureTextEntry
              value={password}
            />
          </View>
          <View style={loginStyles.field}>
            <Button onPress={this.handleSubmit}>
              Ingresar
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  ...state.loginForm,
  formRules: state.formRules.loginForm
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    updateLoginForm
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
