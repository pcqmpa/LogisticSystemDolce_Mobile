/**
 * Module with authentication functionality for navigation.
 * @module src/components/navigation/AuthScene
 */
// React - Redux.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Utils.
import { noop } from '../../utils/';

/**
 * HOC to create a wrapped scene with authentication permissions.
 * @param {Object} config -> Config needed to evaluate the authentication.
 * @param {React.Component} WrappedComponent -> The wrapped component.
 * @returns {React.Component} -> The Component with authentication.
 */
const AuthScene = config => (WrappedComponent) => {
  class WrappedScene extends Component {
    static propTypes = {
      payload: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
      redirect: PropTypes.func.isRequired
    };

    static defaultProps = {
      payload: {},
      redirect: noop
    };

    componentWillMount() {
      if (config.predicate(this.props.payload)) {
        this.props.redirect(config.redirectPath);
      }
    }

    render() {
      return (
        <WrappedComponent />
      );
    }
  }

  return connect(
    state => ({ payload: config.authSelector(state) }),
    dispatch => (bindActionCreators({
      redirect: config.redirectAction
    }, dispatch))
  )(WrappedScene);
};

export default AuthScene;
