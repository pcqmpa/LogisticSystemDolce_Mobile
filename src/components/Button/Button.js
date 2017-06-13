/**
 * Module with the Button component.
 * @module src/components/Button/Button
 * @flow
 */
// React.
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Utils.
import { array } from '../../utils/helpers/';

// Styles.
import buttonStyles from './styles';

// Types.
declare type Props = {
  children: any,
  containerStyles: number,
  disabled: boolean,
  onPress(): void,
  size: number,
  textStyles: number
};

//
// Component.
// -----------------------------------------------------------------------------
const Button = ({
  children,
  containerStyles,
  disabled,
  onPress,
  size,
  textStyles
}: Props) => {
  const calculatedStyles = buttonStyles({ size });
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
