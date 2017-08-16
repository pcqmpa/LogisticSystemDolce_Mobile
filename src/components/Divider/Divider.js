/**
 * Module with the Divider component.
 * @module src/components/Divider/Divider
 * @flow
 */
// React.
import React from 'react';
import { View } from 'react-native';

// Types.
import type { DividerProps } from '../../utils/app-types';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const Divider = (props: DividerProps) => {
  if (props.hide) {
    return null;
  }

  return (
    <View style={styles.divider} />
  );
};

Divider.defaultProps = {
  hide: false
};

export default Divider;
