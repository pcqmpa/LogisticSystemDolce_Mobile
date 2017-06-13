/**
 * Module with the TextForm styles.
 * @module src/components/TextForm/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Types.
import type { StyleOptions } from '../../utils/app-types';

// Constants.
import {
  ERROR,
  GREY
} from '../../constants/colors';
import { ABSOLUTE } from '../../constants/strings';
import {
  BASE_BODER,
  REGULAR_TEXT,
  TEXT_FORM_BORDER_WIDTH,
  TEXT_FORM_PADDING,
  TEXT_FORM_RIGHT,
  TEXT_FORM_TOP
} from '../../constants/values';

export const styles = (options: StyleOptions = {}) => (
  StyleSheet.create({
    container: {
      marginLeft: BASE_BODER,
      marginRight: BASE_BODER
    },
    containerError: {
      borderColor: ERROR
    },
    field: {
      borderWidth: TEXT_FORM_BORDER_WIDTH,
      borderColor: options.color || GREY,
      borderRadius: BASE_BODER,
      paddingLeft: TEXT_FORM_PADDING,
      paddingRight: TEXT_FORM_PADDING,
      fontSize: REGULAR_TEXT
    },
    icon: {
      position: ABSOLUTE,
      right: TEXT_FORM_RIGHT,
      top: TEXT_FORM_TOP
    }
  })
);

export default styles;
