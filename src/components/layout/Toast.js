/**
 * Module with the Toast component.
 * @module src/components/layout/Toast
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import { View, Text } from 'react-native';

// Styles.
import { layoutStyles } from '../../styles/components/';

const Toast = ({ message }) => (
  <View style={layoutStyles.toast}>
    <Text style={layoutStyles.toastText}>
      {message}
    </Text>
  </View>
);

Toast.propTypes = {
  message: PropTypes.string
};

Toast.defaultProps = {
  message: ''
};

export default Toast;
