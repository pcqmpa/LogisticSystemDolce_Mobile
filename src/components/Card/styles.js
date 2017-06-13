/**
 * Module with the Card component styles.
 * @module src/components/Card/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { GREY_LIGHT } from '../../constants/colors';
import {
  ABSOLUTE,
  RIGHT,
  ROW,
  SPACE_BETWEEN
} from '../../constants/strings';
import {
  CARD_CONTAINER_PADDING,
  CARD_CONTAINER_SIZE,
  CARD_MAIN_FIELD_HEIGHT,
  CARD_MAIN_FIELD_WITDH,
  CARD_SECONDARY_FIELD_HEIGHT,
  CARD_SECONDARY_FIELD_WIDTH,
  FLEX_FIT,
  REGULAR_TEXT
} from '../../constants/values';

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY_LIGHT,
    height: CARD_CONTAINER_SIZE,
    padding: CARD_CONTAINER_PADDING
  },
  row: {
    flex: FLEX_FIT,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN
  },
  mainField: {
    height: CARD_MAIN_FIELD_HEIGHT,
    width: CARD_MAIN_FIELD_WITDH
  },
  secondaryField: {
    height: CARD_SECONDARY_FIELD_HEIGHT,
    width: CARD_SECONDARY_FIELD_WIDTH
  },
  fieldsText: {
    fontSize: REGULAR_TEXT
  },
  fieldsTextRight: {
    textAlign: RIGHT
  },
  check: {
    position: ABSOLUTE,
    right: 0
  }
});

export default styles;
