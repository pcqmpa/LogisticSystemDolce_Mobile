/**
 * Module with the reusable ButtonIcon component.
 * @module src/components/ButtonIcon/ButtonIcon
 * @flow
 */
// React.
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types.
import type { ButtonIconProps } from '../../utils/app-types';

const ButtonIcon = (props: ButtonIconProps) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={props.style}
  >
    <Icon
      name={props.icon}
      style={props.iconStyle}
    />
  </TouchableOpacity>
);

export default ButtonIcon;
