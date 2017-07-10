/**
 * Module with the ListButton component styles.
 * @module src/components/ListButton/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import {
  GREY_DOVE,
  GREY_LIGHT
} from '../../constants/colors';
import {
  CENTER,
  ROW,
  SPACE_BETWEEN
} from '../../constants/strings';
import {
  BASE_BODER,
  FLEX_FIT,
  LISTBUTTON,
  REGULAR_TEXT
} from '../../constants/values';

const styles = StyleSheet.create({
  arrow: {
    alignItems: CENTER,
    backgroundColor: GREY_DOVE,
    borderBottomRightRadius: BASE_BODER,
    borderTopRightRadius: BASE_BODER,
    flex: LISTBUTTON.ARROW_SIZE,
    justifyContent: CENTER
  },
  container: {
    backgroundColor: GREY_LIGHT,
    borderRadius: BASE_BODER,
    flexDirection: ROW,
    height: LISTBUTTON.CONTAINER_HEIGHT,
    justifyContent: SPACE_BETWEEN,
    marginLeft: LISTBUTTON.CONTAINER_MARGIN,
    marginRight: LISTBUTTON.CONTAINER_MARGIN,
    marginTop: LISTBUTTON.CONTAINER_MARGIN
  },
  content: {
    flex: LISTBUTTON.CONTENT_SIZE,
    padding: LISTBUTTON.CONTENT_PADDING
  },
  text: {
    fontSize: REGULAR_TEXT
  },
  textContainer: {
    flex: FLEX_FIT,
    justifyContent: CENTER
  }
});

export default styles;
