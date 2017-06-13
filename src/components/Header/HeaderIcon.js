/**
 * Module with the touchable HeaderIcon component.
 * @module src/components/Header/HeaderIcon
 * @flow
 */
// React.
import React from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Constants.
import { WHITE } from '../../constants/colors';
import { LARGE_TEXT } from '../../constants/values';

// Types.
import type { HeaderIconProps } from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const HeaderIcon = ({
  icon,
  onPress,
  show,
  styles
}: HeaderIconProps) => {
  if (!show) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles}>
        <Icon
          color={WHITE}
          name={icon}
          size={LARGE_TEXT}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HeaderIcon;
