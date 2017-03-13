/**
 * Module with the TextForm icon component.
 * @module src/components/form/TextFormIcon
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Constants.
import { CLOSE_CIRCLE } from '../../constants/icons';

// Styles.
import { formStyles } from '../../styles/components/';
import { colors } from '../../styles/values/';

const TextFormIcon = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <View style={formStyles.validIconTextForm}>
      <Icon
        size={20}
        name={CLOSE_CIRCLE}
        color={colors.errorDarker}
      />
    </View>
  );
};

TextFormIcon.propTypes = {
  show: PropTypes.bool
};

TextFormIcon.defaultProps = {
  show: false
};

export default TextFormIcon;
