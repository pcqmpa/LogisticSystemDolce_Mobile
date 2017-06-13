/**
 * Module with the Toast component styles.
 * @module src/components/Toast/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { WHITE } from '../../constants/colors';
import { ABSOLUTE, CENTER } from '../../constants/strings';
import {
  BASE_BODER,
  SMALL_TEXT,
  TOAST_BOTTOM,
  TOAST_HEIGHT,
  TOAST_PADDING,
  TOAST_WIDTH
} from '../../constants/values';

// Types.
import type { StyleOptions } from '../../utils/app-types';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    container: {
      alignItems: CENTER,
      backgroundColor: options.color,
      borderRadius: BASE_BODER,
      bottom: TOAST_BOTTOM,
      height: TOAST_HEIGHT,
      justifyContent: CENTER,
      padding: TOAST_PADDING,
      position: ABSOLUTE,
      width: TOAST_WIDTH
    },
    text: {
      color: WHITE,
      textAlign: CENTER,
      fontSize: SMALL_TEXT
    }
  })
);

export default styles;
