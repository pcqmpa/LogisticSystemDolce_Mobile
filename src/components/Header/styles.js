/**
 * Module with the Header component styles.
 * @module src/components/Header/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { BRAND_DARK, WHITE } from '../../constants/colors';
import { CENTER } from '../../constants/strings';
import {
  HEADER_COLUMN_SIZE,
  HEADER_HEIGHT,
  HEADER_ICON_COLUMN_SIZE,
  LARGE_TEXT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BRAND_DARK,
    height: HEADER_HEIGHT,
    justifyContent: CENTER,
    width: WINDOW_WIDTH
  },
  iconColumn: {
    flex: HEADER_ICON_COLUMN_SIZE
  },
  icon: {
    alignItems: CENTER,
    height: HEADER_HEIGHT,
    justifyContent: CENTER
  },
  column: {
    flex: HEADER_COLUMN_SIZE,
    height: HEADER_HEIGHT,
    justifyContent: CENTER
  },
  text: {
    color: WHITE,
    fontSize: LARGE_TEXT,
    textAlign: CENTER
  }
});

export default styles;
