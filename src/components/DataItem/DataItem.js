/**
 * Module with the DataItem component.
 * @module src/components/DataItem/DataItem
 * @flow
 */
// React.
import React from 'react';
import {
  Text,
  View
} from 'react-native';

// Types.
import type { DataItemProps } from '../../utils/app-types';

// Components.
import { Grid, Column } from '../';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const DataItem = (props: DataItemProps) => {
  if (props.hide) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Column styles={styles.keyContainer}>
          <Text style={[styles.text, styles.keyText]}>
            {props.keyText}
          </Text>
        </Column>
        <Column styles={styles.valueContainer}>
          <Text style={styles.text}>{props.valueText}</Text>
        </Column>
      </Grid>
    </View>
  );
};

DataItem.defaultProps = {
  hide: false
};

export default DataItem;
