/**
 * Module with the ToastContainer component styles.
 * @module src/styles/containers/toast-container
 */
// React Native.
import { StyleSheet } from 'react-native';

// Values.
import { variables } from '../values';

const toastContainerStyles = StyleSheet.create({
  container: {
    width: variables.screen.width,
    height: variables.screen.height,
    alignItems: 'center'
  }
});

export default toastContainerStyles;
