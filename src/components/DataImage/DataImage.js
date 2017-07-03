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
  disabled,
  keyText,
  onPress,
  picture
}: DataImageProps) => {
  const computedStyles = styles({ disabled });
  return (
    <View style={computedStyles.container}>
      <Grid direction={COLUMN}>
        <Column styles={computedStyles.keyContainer}>
          <Text style={[computedStyles.text, computedStyles.keyText]}>
            {keyText}
          </Text>
        </Column>
        <Column styles={computedStyles.valueContainer}>
          <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={computedStyles.touchable}
          >
            {
              (picture) ? (
                <Image
                  resizeMode="stretch"
                  source={{ uri: picture }}
                  style={computedStyles.image}
                />
              ) : (
                <View style={computedStyles.icon}>
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
  disabled: false,
  onPress: noop
};

export default DataImage;
