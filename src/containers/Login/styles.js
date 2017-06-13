/**
 * Module with the styles of the Login container component.
 * @module src/containers/Login/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Consants.
import { BRAND } from '../../constants/colors';
import { CENTER } from '../../constants/strings';
import {
  HEADING_TEXT,
  LOGIN_FORM_FIELD_PADDING,
  LOGIN_FORM_SIZE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    alignItems: CENTER,
    justifyContent: CENTER
  },
  form: {
    width: WINDOW_WIDTH - LOGIN_FORM_SIZE
  },
  heading: {
    color: BRAND,
    fontSize: HEADING_TEXT,
    textAlign: CENTER
  },
  field: {
    padding: LOGIN_FORM_FIELD_PADDING
  }
});

export default styles;
