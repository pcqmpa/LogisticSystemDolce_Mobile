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

// Constants.
import { COLUMN } from '../../constants/types';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const DataItem = ({
  keyText,
  valueText
}: DataItemProps) => {
  return (
    <View style={styles.container}>
      <Grid direction={COLUMN}>
        <Column styles={styles.keyContainer}>
          <Text style={[styles.text, styles.keyText]}>
            {keyText}
          </Text>
        </Column>
        <Column styles={styles.valueContainer}>
          <Text style={styles.text}>{valueText}</Text>
        </Column>
      </Grid>
    </View>
  );
};

export default DataItem;
