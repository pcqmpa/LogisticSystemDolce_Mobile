/**
 * Module with the Check box component styles.
 * @module src/components/Check/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { GREY, SUCCESS } from '../../constants/colors';
import {
  BASE_BODER,
  CHECK_PADDING,
  CHECK_SIZE,
  REGULAR_TEXT
} from '../../constants/values';
import { CENTER } from '../../constants/strings';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY,
    borderRadius: BASE_BODER,
    height: CHECK_SIZE,
    padding: CHECK_PADDING,
    width: CHECK_SIZE
  },
  check: {
    color: SUCCESS,
    fontSize: REGULAR_TEXT,
    textAlign: CENTER
  }
});

export default styles;
