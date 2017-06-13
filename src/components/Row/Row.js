/**
 * Module with the layout Row component.
 * @module src/components/Row/Row
 * @flow
 */
// React.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// Utils.
import { array } from '../../utils/helpers/';

// Styles.
import rowStyles from './styles';

// Types.
import type { GridProps } from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const Row = ({
  children,
  onPress,
  size,
  styles
}: GridProps) => {
  const computedStyles = rowStyles({ size });
  const shrinkedStyles = array.shrink([
    computedStyles.container,
    styles
  ]);

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={shrinkedStyles}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {children}
    </View>
  );
};

export default Row;
