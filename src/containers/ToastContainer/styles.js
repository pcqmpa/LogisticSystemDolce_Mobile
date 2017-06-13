/**
 * Module with the ToastContainer styles.
 * @module src/containers/ToastContainer/ToastContainer
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { CENTER } from '../../constants/strings';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    alignItems: CENTER,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH
  }
});

export default styles;
