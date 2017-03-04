/**
 * Module with the scenes container.
 * @module src/containers/navigation/SceneContainer
 */
// React - Redux.
import React, { PropTypes } from 'react';

// React Native.
import { NavigationExperimental } from 'react-native';

const {
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

const SceneContainer = ({ scenes, currentScene }) => {
  const { scene } = currentScene;
  const component = scenes.reduce((current, element) => (
    (element.props.name === scene.route.name) ? element : current
  ));
  const {
    type: CurrentScene,
    props: sceneProps
  } = component;

  return (
    <CurrentScene
      {...sceneProps}
      {...currentScene}
    />
  );
};

SceneContainer.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.node).isRequired,
  currentScene: PropTypes.shape({
    ...NavigationPropTypes.SceneRendererProps
  }).isRequired
};

SceneContainer.defaultProps = {
  scenes: [],
  currentScene: {}
};

export default SceneContainer;
