/**
 * Module with the Row component styles.
 * @module src/components/Row/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import {
  FLEX_START,
  ROW
} from '../../constants/strings';
import { FLEX_FIT } from '../../constants/values';

// Types.
import type { StyleOptions } from '../../utils/app-types';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    container: {
      alignItems: options.alignContent || FLEX_START,
      flex: options.size || FLEX_FIT,
      flexDirection: ROW,
      justifyContent: options.justifyContent || FLEX_START
    }
  })
);

export default styles;
