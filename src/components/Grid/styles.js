/**
 * Module with the Grid component styles.
 * @module src/components/Grid/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { ROW } from '../../constants/strings';
import { FLEX_FIT } from '../../constants/values';

// Type.
import type { StyleOptions } from '../../utils/app-types';

const styles = (options: StyleOptions) => (
  StyleSheet.create({
    container: {
      flex: FLEX_FIT,
      flexDirection: options.direction || ROW
    }
  })
);

export default styles;
