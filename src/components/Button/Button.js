/**
 * Module with the Button component.
 * @module src/components/Button/Button
 * @flow
 */
// React.
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Types.
import type { ButtonProps } from '../../utils/app-types';

// Utils.
import { array } from '../../utils/helpers/';

// Styles.
import buttonStyles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const Button = ({
  children,
  containerStyles,
  disabled,
  onPress,
  size,
  textStyles,
  theme
}: ButtonProps) => {
  const calculatedStyles = buttonStyles({ color: theme, disabled, size });
  const shrinkedContainerStyles = array.shrink([
    calculatedStyles.container,
    containerStyles
  ]);
  const shrinkedTextStyles = array.shrink([
    calculatedStyles.text,
    textStyles
  ]);

  return (
    <View style={shrinkedContainerStyles}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
      >
        <View style={calculatedStyles.button}>
          <Text style={shrinkedTextStyles}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
