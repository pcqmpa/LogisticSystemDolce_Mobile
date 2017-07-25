/**
 * Module with the Zones screen component styles.
 * @module src/containers/Zones/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { CENTER } from '../../constants/strings';
import {
  REGULAR_TEXT,
  WINDOW_WIDTH,
  ZONES
} from '../../constants/values';

const styles = StyleSheet.create({
  listContainer: {
    height: ZONES.CONTAINER_HEIGHT,
    width: WINDOW_WIDTH
  },
  text: {
    fontSize: REGULAR_TEXT,
    textAlign: CENTER
  },
  textContainer: {
    paddingTop: ZONES.TEXT_CONTAINER_PADDING
  }
});

export default styles;
