/**
 * Module with the SceneHeader component.
 * @module src/components/layout/SceneHeader
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import { View, Text } from 'react-native';

// Utils.
import { componentHelpers } from '../../utils/';

// Styles.
import { navigationStyles } from '../../styles/components/';

const SceneHeader = ({
  style,
  theme,
  layout,
  labelTheme,
  label
}) => {
  const styles = componentHelpers
    .concatStyles(
      navigationStyles.sceneHeader,
      [theme, layout, style]
    );

  const labelStyles = componentHelpers
    .concatStyles(
      navigationStyles.sceneHeaderLabel,
      [labelTheme]
    );

  return (
    <View style={styles}>
      <Text style={labelStyles}>{label}</Text>
    </View>
  );
};

SceneHeader.propTypes = {
  style: PropTypes.number,
  theme: PropTypes.number,
  layout: PropTypes.number,
  labelTheme: PropTypes.number,
  label: PropTypes.string
};

SceneHeader.defaultProps = {
  style: null,
  theme: null,
  layout: null,
  labelTheme: null,
  label: ''
};

export default SceneHeader;
