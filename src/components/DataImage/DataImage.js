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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types.
import type { DataImageProps } from '../../utils/app-types';

// Components.
import { Grid, Column } from '../';

// Utils.
import noop from '../../utils/noop';

// Constants.
import { GREY } from '../../constants/colors';
import { CAMERA } from '../../constants/icons';
import { COLUMN } from '../../constants/types';
import {
  DATAIMAGE_ICON_SIZE
} from '../../constants/values';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const DataImage = ({
  keyText,
  onPress,
  picture
}: DataImageProps) => {
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
            {
              (picture) ? (
                <Image
                  source={{ uri: picture }}
                  style={styles.image}
                />
              ) : (
                <View style={styles.icon}>
                  <Icon
                    color={GREY}
                    name={CAMERA}
                    size={DATAIMAGE_ICON_SIZE}
                  />
                </View>
              )
            }
          </TouchableOpacity>
        </Column>
      </Grid>
    </View>
  );
};

DataImage.defaultProps = {
  onPress: noop
};

export default DataImage;
