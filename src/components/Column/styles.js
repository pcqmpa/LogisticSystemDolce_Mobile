/**
 * Module with the Column component styles.
 * @module src/components/Column/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { COLUMN } from '../../constants/strings';
import { FLEX_FIT } from '../../constants/values';

// Types.
import type { StyleOptions } from '../../utils/app-types';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    container: {
      flex: options.size || FLEX_FIT,
      flexDirection: COLUMN
    }
  })
);

export default styles;
