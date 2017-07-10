/**
 * Module with the ListButton component
 * @module src/components/ListButton/ListButton
 * @flow
 */
// React.
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types.
import type { ListButtonProps } from '../../utils/app-types';

// Constants.
import { BLACK } from '../../constants/colors';
import { ARROW_RIGHT_THICK } from '../../constants/icons';
import { REGULAR_TEXT } from '../../constants/values';

// Styles.
import styles from './styles';

const ListItem = (props: ListButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {props.title}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {props.text}
            </Text>
          </View>
        </View>
        <View style={styles.arrow}>
          <Icon
            color={BLACK}
            name={ARROW_RIGHT_THICK}
            size={REGULAR_TEXT}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
