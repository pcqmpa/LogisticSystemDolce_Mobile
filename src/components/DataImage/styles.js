/**
 * Module with the DataItem component styles.
 * @module src/components/DataItem/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import {
  BRAND,
  GREY_LIGHT,
  WHITE
} from '../../constants/colors';
import { CENTER } from '../../constants/strings';
import {
  DATAITEM_CONTAINER_HEIGHT,
  DATAIMAGE_IMAGE_SIZE,
  DATAITEM_KEY_CONTAINER_SIZE,
  DATAITEM_PADDING,
  DATAITEM_VALUE_CONTAINER_SIZE,
  REGULAR_TEXT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    height: DATAITEM_CONTAINER_HEIGHT,
    width: WINDOW_WIDTH
  },
  text: {
    fontSize: REGULAR_TEXT
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
  valueContainer: {
    backgroundColor: GREY_LIGHT,
    flex: DATAITEM_VALUE_CONTAINER_SIZE,
    justifyContent: CENTER,
    paddingLeft: DATAITEM_PADDING
  },
  image: {
    height: DATAIMAGE_IMAGE_SIZE,
    width: DATAIMAGE_IMAGE_SIZE
  },
  icon: {
    alignItems: CENTER,
    justifyContent: CENTER,
    height: DATAIMAGE_IMAGE_SIZE,
    width: DATAIMAGE_IMAGE_SIZE
  }
});

export default styles;
