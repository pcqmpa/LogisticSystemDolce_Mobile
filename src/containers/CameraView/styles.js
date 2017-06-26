/**
 * Module with the CameraView container styles.
 * @module src/containers/CameraView/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { GREY, WHITE } from '../../constants/colors';
import {
  ABSOLUTE,
  CENTER,
  FLEX_END
} from '../../constants/strings';
import {
  CAMERA_VIEW,
  FLEX_FIT,
  FLEX_STATIC,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH
  },
  camera: {
    flex: FLEX_FIT,
    justifyContent: FLEX_END,
    alignItems: CENTER
  },
  backButtonContainer: {
    position: ABSOLUTE,
    height: CAMERA_VIEW.BACK_BUTTON_HEIGHT,
    left: CAMERA_VIEW.BACK_BUTTON_LEFT,
    top: CAMERA_VIEW.BACK_BUTTON_TOP,
    width: CAMERA_VIEW.BACK_BUTTON_WIDTH
  },
  backButtonIcon: {
    color: WHITE,
    fontSize: CAMERA_VIEW.BACK_BUTTON_FONT_SIZE
  },
  shotButtonContainer: {
    backgroundColor: WHITE,
    borderRadius: CAMERA_VIEW.SHOT_BUTTON_RADIUS,
    flex: FLEX_STATIC,
    marginBottom: CAMERA_VIEW.SHOT_BUTTON_MARGIN,
    padding: CAMERA_VIEW.SHOT_BUTTON_PADDING
  },
  shotButtonIcon: {
    color: GREY,
    fontSize: 40
  }
});

export default styles;
