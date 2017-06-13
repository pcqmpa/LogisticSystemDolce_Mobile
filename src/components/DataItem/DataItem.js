/**
 * Module with the DataItem component.
 * @module src/components/DataItem/DataItem
 * @flow
 */
// React.
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Components.
import { Grid, Column } from '../';

// Utils.
import noop from '../../utils/noop';

// Constants.
import {
  BRAND,
  GREY_LIGHT,
  WHITE
} from '../../constants/colors';
import { CENTER, COLUMN } from '../../constants/types';
import {
  REGULAR_TEXT,
  WINDOW_WIDTH
} from '../../constants/values';

// Styles.
import styles from './styles';

// Types.
declare type Props = {
  image: string,
  keyText: string,
  onPress(): void,
  valueText: string
};

//
// Component.
// -----------------------------------------------------------------------------
const DataItem = ({
  image,
  keyText,
  onPress,
  valueText
}: Props) => {
  if (image) {
    return (
      <View style={styles.container}>
        <Grid direction={COLUMN}>
          <Column styles={styles.keyContainer}>
            <Text style={[styles.text, styles.keyText]}>
              {keyText}
            </Text>
          </Column>
          <Column styles={styles.valueContainer}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={{ uri: image }}
                style={styles.image}
              />
            </TouchableOpacity>
          </Column>
        </Grid>
      </View>
    );
  }

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

DataItem.defaultProps = {
  onPress: noop
};

export default DataItem;
