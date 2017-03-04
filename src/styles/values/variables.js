/**
 * Module with the app style values.
 * @module src/styles/values/variables
 */
// React Native.
import { Dimensions } from 'react-native';

// Screen.
const screen = Dimensions.get('screen');

// Button.
const button = {
  elevation: 4,
  fontSize: 20,
  padding: 12
};

// Scene Header.
const sceneHeader = {
  height: 50
};

export default {
  screen,
  button,
  sceneHeader
};
