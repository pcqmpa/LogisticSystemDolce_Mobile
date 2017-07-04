/**
 * Module with the DataItem component styles.
 * @module src/components/DataItem/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Types.
import type { StyleOptions } from '../../utils/app-types';

// Constants.
import {
  BRAND,
  GREY_LIGHT,
  WHITE
} from '../../constants/colors';
import { CENTER } from '../../constants/strings';
import {
  BUTTON_ACTIVE_OPACITY,
  BUTTON_DISABLE_OPACITY,
  DATAITEM_CONTAINER_HEIGHT,
  DATAIMAGE_IMAGE_SIZE,
  DATAITEM_KEY_CONTAINER_SIZE,
  DATAITEM_PADDING,
  DATAITEM_VALUE_CONTAINER_SIZE,
  REGULAR_TEXT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    container: {
      height: DATAITEM_CONTAINER_HEIGHT,
      width: WINDOW_WIDTH
    },
    icon: {
      alignItems: CENTER,
      height: DATAIMAGE_IMAGE_SIZE,
      justifyContent: CENTER,
      width: DATAIMAGE_IMAGE_SIZE
    },
    image: {
      height: DATAIMAGE_IMAGE_SIZE,
      opacity: (options.disabled) ? BUTTON_DISABLE_OPACITY : BUTTON_ACTIVE_OPACITY,
      width: DATAIMAGE_IMAGE_SIZE
    },
    keyContainer: {
      backgroundColor: BRAND,
      flex: DATAITEM_KEY_CONTAINER_SIZE,
      justifyContent: CENTER,
      paddingLeft: DATAITEM_PADDING
    },
    keyText: {
      color: WHITE
    },
    text: {
      fontSize: REGULAR_TEXT
    },
    touchable: {
      opacity: (options.disabled) ? BUTTON_DISABLE_OPACITY : BUTTON_ACTIVE_OPACITY
    },
    valueContainer: {
      backgroundColor: GREY_LIGHT,
      flex: DATAITEM_VALUE_CONTAINER_SIZE,
      justifyContent: CENTER,
      paddingLeft: DATAITEM_PADDING
    }
  })
);

export default styles;
