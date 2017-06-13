/**
 * Module with the layout Column component.
 * @module src/components/Column/Column
 * @flow
 */
// React.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// Utils.
import { array } from '../../utils/helpers/';

// Styles.
import columnStyles from './styles';

// Types.
import type { GridProps } from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const Column = ({
  children,
  onPress,
  size,
  styles
}: GridProps) => {
  const computedStyles = columnStyles({ size });
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
    <View style={shrinkedStyles}>
      {children}
    </View>
  );
};

export default Column;
