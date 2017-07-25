/**
 * Module with the PicturePreview container component styles.
 * @module src/containers/PicturePreview/PicturePreview
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import {
  FLEX_FIT,
  HEADER_HEIGHT,
  PICTURE_PREVIEW,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  buttonColumn: {
    flex: PICTURE_PREVIEW.BUTTON_COLUMN_SIZE
  },
  buttonWrapper: {
    padding: PICTURE_PREVIEW.BUTTON_WRAPPER_PADDING
  },
  buttonsContainer: {
    flex: FLEX_FIT,
    paddingTop: PICTURE_PREVIEW.BUTTONS_CONTAINER_PADDING
  },
  container: {
    height: (WINDOW_HEIGHT - HEADER_HEIGHT),
    width: WINDOW_WIDTH
  },
  picture: {
    flex: FLEX_FIT
  },
  pictureContainer: {
    height: PICTURE_PREVIEW.PICTURE_CONTAINER_HEIGHT,
    width: WINDOW_WIDTH
  }
});

export default styles;
