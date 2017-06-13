/**
 * Module with the Check box component.
 * @module src/components/Check/Check
 * @flow
 */
// React.
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Utils.
import { array } from '../../utils/helpers/';

// Constants.
import { CHECK } from '../../constants/icons';

// Styles.
import styles from './styles';

// Types.
declare type Props = {
  checked: boolean,
  containerStyles: number,
  checkStyles: number
};

//
// Component.
// -----------------------------------------------------------------------------
const Check = ({
  checked,
  checkStyles,
  containerStyles
}: Props) => {
  const shrinkedContainerStyles = array.shrink([
    styles.container,
    containerStyles
  ]);
  const shrinkedCheckStyles = array.shrink([
    styles.check,
    checkStyles
  ]);

  return (
    <View style={shrinkedContainerStyles}>
      {
        checked && (
          <Icon
            name={CHECK}
            style={shrinkedCheckStyles}
          />
        )
      }
    </View>
  );
};

Check.defaultProps = {
  checked: false
};

export default Check;
