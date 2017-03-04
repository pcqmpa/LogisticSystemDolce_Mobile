/**
 * Module with the Login container component styles.
 * @module src/styles/containers/login
 */
// React Native.
import { StyleSheet } from 'react-native';

// Values.
import { variables } from '../values/';

const loginStyles = StyleSheet.create({
  container: {
    width: variables.screen.width,
    height: variables.screen.height - variables.sceneHeader.height,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerItems: {
    width: 300,
    height: 60
  },
  buttonContainer: {
    marginTop: 12
  }
});

export default loginStyles;
