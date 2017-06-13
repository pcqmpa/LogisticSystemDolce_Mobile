/**
 * Module with the Header layout component.
 * @module src/components/Header/Header
 * @flow
 */
// React.
import React from 'react';
import { Text, View } from 'react-native';

// Components.
import {
  Grid,
  Column
} from '../';
import HeaderIcon from './HeaderIcon';

// Constants.
import { LOGOUT, REFRESH } from '../../constants/icons';

// Styles.
import styles from './styles';

// Types.
import type { HeaderProps } from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const Header = ({
  children,
  hide,
  logoutIcon,
  refreshIcon
}: HeaderProps) => {
  if (hide) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Column styles={styles.iconColumn}>
          <HeaderIcon
            icon={LOGOUT}
            onPress={logoutIcon.onPress}
            show={logoutIcon.show}
            styles={styles.icon}
          />
        </Column>
        <Column styles={styles.column}>
          <Text style={styles.text}>
            {children}
          </Text>
        </Column>
        <Column styles={styles.iconColumn}>
          <HeaderIcon
            icon={REFRESH}
            onPress={refreshIcon.onPress}
            show={refreshIcon.show}
            styles={styles.icon}
          />
        </Column>
      </Grid>
    </View>
  );
};

Header.defaultProps = {
  hide: false,
  logoutIcon: {},
  refreshIcon: {}
};

export default Header;
