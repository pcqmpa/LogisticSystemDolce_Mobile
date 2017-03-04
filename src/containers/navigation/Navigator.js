/**
 * Module with the app navigator.
 * @module src/contaners/navigation/Navigator
 */
// React - Redux.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// React Native.
import {
  NavigationExperimental
} from 'react-native';

// Components.
import { SceneHeader } from '../../components/';
import { SceneContainer } from '../';

// Actions.
import { pop } from '../../actions/navigation';

// Utils.
import { noop } from '../../utils/';

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class Navigator extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    navigationState: PropTypes.shape({
      index: PropTypes.number,
      routes: PropTypes.array
    }).isRequired,
    onPopScene: PropTypes.func.isRequired
  };

  static defaultProps = {
    children: [],
    navigationState: {},
    onPopScene: noop
  };

  /**
   * Renders a scene header.
   * @param {Object} sceneProps -> The props of the current scene.
   * @returns {React.Component} -> The header of the scene.
   */
  renderHeader = (sceneProps) => {
    const { scene } = sceneProps;
    return (
      <SceneHeader label={scene.route.label} />
    );
  };

  /**
   * Renders a scene based on the current state.
   * @param {Object} sceneProps -> The props of the current scene.
   * @returns {React.Component} -> The component to be rendered.
   */
  renderScene = sceneProps => (
    <SceneContainer
      scenes={this.props.children}
      currentScene={sceneProps}
    />
  );

  render() {
    const {
      onPopScene,
      navigationState
    } = this.props;

    return (
      <NavigationCardStack
        enableGestures={false}
        navigationState={navigationState}
        onNavigateBack={onPopScene}
        renderHeader={this.renderHeader}
        renderScene={this.renderScene}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onPopScene: pop
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);
