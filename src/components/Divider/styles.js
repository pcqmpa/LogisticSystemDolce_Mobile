/**
 * Module with the Divider component styles.
 * @module src/components/Divider/styles
 * @flow
 */
// React.
import { StyleSheet } from 'react-native';

// Constants.
import { GREY } from '../../constants/colors';
import { DIVIDER_HEIGHT } from '../../constants/values';

const styles = StyleSheet.create({
  divider: {
    height: DIVIDER_HEIGHT,
    backgroundColor: GREY
  }
});

export default styles;
