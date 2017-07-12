/**
 * Module with the Zones screen component styles.
 * @module src/containers/Zones/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import {
  HEADER_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  listContainer: {
    height: (WINDOW_HEIGHT - HEADER_HEIGHT - 20),
    width: WINDOW_WIDTH
  }
});

export default styles;
