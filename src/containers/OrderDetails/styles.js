/**
 * Module with the styles of the OrderDetails container.
 * @module src/containers/OrderDetailes/styles.
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { CENTER } from '../../constants/strings';
import {
  HEADER_HEIGHT,
  ORDER_DETAILS,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    height: (WINDOW_HEIGHT - HEADER_HEIGHT),
    width: WINDOW_WIDTH
  },
  iconContainer: {
    alignItems: CENTER,
    justifyContent: CENTER,
    height: ORDER_DETAILS.ICON_CONTAINER_HEIGHT,
    width: WINDOW_WIDTH
  },
  submitContainer: {
    paddingBottom: ORDER_DETAILS.SUBMIT_CONTAINER_PADDING_BOTTOM,
    paddingLeft: ORDER_DETAILS.SUBMIT_CONTAINER_PADDING_LEFT,
    paddingRight: ORDER_DETAILS.SUBMIT_CONTAINER_PADDING_RIGHT,
    paddingTop: ORDER_DETAILS.SUBMIT_CONTAINER_PADDING_TOP
  }
});

export default styles;
