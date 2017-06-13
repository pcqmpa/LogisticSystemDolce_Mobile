/**
 * Module with the app Toast component.
 * @module src/components/Toast/Toast
 * @flow
 */
// React.
import React from 'react';
import { Text, View } from 'react-native';

// Types.
import type { ToastProps } from '../../utils/app-types';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const Toast = ({ message, type }: ToastProps) => {
  const computedStyles = styles({ color: type });

  return (
    <View style={computedStyles.container}>
      <Text style={computedStyles.text}>
        {message}
      </Text>
    </View>
  );
};

export default Toast;
