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
  valueContainer: {
    backgroundColor: GREY_LIGHT,
    flex: DATAITEM_VALUE_CONTAINER_SIZE,
    justifyContent: CENTER,
    paddingLeft: DATAITEM_PADDING
  }
});

export default styles;
