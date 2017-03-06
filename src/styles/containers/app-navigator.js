/**
 * Module with the App Navigator container styles.
 * @module src/styles/containers/app-navigator
 */
// React Native.
import { StyleSheet } from 'react-native';

// Values.
import { variables } from '../values/';

const appNativatorStyles = StyleSheet.create({
  container: {
    width: variables.screen.width,
    height: variables.screen.height
  }
});

export default appNativatorStyles;
