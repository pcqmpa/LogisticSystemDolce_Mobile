/**
 * Module with the TextFormIcon component.
 * @module src/components/TextForm/TextFormIcon
 * @flow
 */
// React.
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Constants.
import { CLOSE_CIRCLE } from '../../constants/icons';
import { ERROR } from '../../constants/colors';
import { TEXT_FORM_ICON_SIZE } from '../../constants/values';

// Styles.
import formStyles from './styles';

// Types
declare type Props = { show: boolean };

//
// Component.
// -----------------------------------------------------------------------------
const TextFormIcon = ({ show }: Props) => {
  if (!show) {
    return null;
  }

  const computedStyles = formStyles();

  return (
    <View style={computedStyles.icon}>
      <Icon
        color={ERROR}
        name={CLOSE_CIRCLE}
        size={TEXT_FORM_ICON_SIZE}
      />
    </View>
  );
};

TextFormIcon.defautProps = {
  show: false
};

export default TextFormIcon;
