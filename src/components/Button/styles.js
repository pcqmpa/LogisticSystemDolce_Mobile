/**
 * Module with the Button component styles.
 * @module src/components/Button/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { BRAND, WHITE } from '../../constants/colors';
import { CENTER, ROW } from '../../constants/strings';
import {
  BASE_BODER,
  BUTTON_ACTIVE_OPACITY,
  BUTTON_DISABLE_OPACITY,
  BUTTON_ELEVATION,
  BUTTON_PADDING,
  REGULAR_TEXT
} from '../../constants/values';

// Types.
import type { StyleOptions } from '../../utils/app-types';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    button: {
      alignItems: CENTER,
      backgroundColor: options.color || BRAND,
      borderRadius: 4,
      flexDirection: ROW,
      justifyContent: CENTER,
      opacity: (options.disabled) ? BUTTON_DISABLE_OPACITY : BUTTON_ACTIVE_OPACITY,
      padding: BUTTON_PADDING
    },
    container: {
      elevation: BUTTON_ELEVATION,
      marginLeft: BASE_BODER,
      marginRight: BASE_BODER
    },
    text: {
      color: WHITE,
      fontSize: options.size || REGULAR_TEXT
    }
  })
);

export default styles;
