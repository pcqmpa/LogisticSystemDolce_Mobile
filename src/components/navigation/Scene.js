/**
 * Module with the navigation Scene component.
 * @module src/component/navigation/Scene
 */
// React.
import React, { Component, PropTypes } from 'react';

// React Native.
import { View } from 'react-native';


class Scene extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired
  };

  static defaultProps = {
    name: '',
    component: ''
  };

  render() {
    const {
      name,
      component: WrappedComponent
    } = this.props;

    return (
      <View>
        <WrappedComponent name={name} />
      </View>
    );
  }
}

export default Scene;
