/**
 * Module with the Card component styles.
 * @module src/components/Card/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { GREY_ALTO } from '../../constants/colors';
import {
  ABSOLUTE,
  FLEX_START,
  RIGHT,
  ROW,
  SPACE_BETWEEN
} from '../../constants/strings';
import {
  CARD_ASSESOR_CONTAINER_WIDTH,
  CARD_CONTAINER_PADDING,
  CARD_CONTAINER_SIZE,
  CARD_MAIN_FIELD_HEIGHT,
  CARD_MAIN_FIELD_WITDH,
  CARD_SECONDARY_FIELD_HEIGHT,
  CARD_SECONDARY_FIELD_WIDTH,
  FLEX_FIT,
  REGULAR_TEXT,
  SMALL_TEXT
} from '../../constants/values';

const styles = StyleSheet.create({
  assesorName: {
    fontSize: SMALL_TEXT
  },
  assesorNameContainer: {
    alignItems: FLEX_START,
    justifyContent: FLEX_START,
    width: CARD_ASSESOR_CONTAINER_WIDTH
  },
  check: {
    position: ABSOLUTE,
    right: 0
  },
  container: {
    backgroundColor: GREY_ALTO,
    height: CARD_CONTAINER_SIZE,
    padding: CARD_CONTAINER_PADDING
  },
  fieldsText: {
    fontSize: REGULAR_TEXT
  },
  fieldsTextRight: {
    textAlign: RIGHT
  },
  mainField: {
    height: CARD_MAIN_FIELD_HEIGHT,
    width: CARD_MAIN_FIELD_WITDH
  },
  row: {
    flex: FLEX_FIT,
    flexDirection: ROW,
    justifyContent: SPACE_BETWEEN
  },
  secondaryField: {
    height: CARD_SECONDARY_FIELD_HEIGHT,
    width: CARD_SECONDARY_FIELD_WIDTH
  }
});

export default styles;
