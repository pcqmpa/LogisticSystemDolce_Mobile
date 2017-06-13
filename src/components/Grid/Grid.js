/**
 * Module with the layout Grid component.
 * @module src/components/Grid/Grid
 * @flow
 */
// React.
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// Styles.
import gridStyles from './styles';

// Types.
declare type Props = {
  children: any,
  direction: string,
  onPress(): void
};

const Grid = ({
  children,
  direction,
  onPress
}: Props) => {
  const computedStyles = gridStyles({ direction });

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} >
        <View style={computedStyles.container}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={computedStyles.container}>
      {children}
    </View>
  );
};

export default Grid;
