/**
 * Module with the app Main component that will
 * contain all the screen components.
 * @module src/containers/Main/Main
 * @flow
 */
// React.
import React from 'react';
import { View } from 'react-native';

// Components.
import {
  HeaderContainer,
  Loading,
  ToastContainer
} from '../';

// Styles.
import styles from './styles';

// Types.
declare type Props = { children: ReactClass<any> };

/**
 * Renders the Main container component.
 * @returns {ReactElement} -> The react component.
 */
const Main = ({ children }: Props) => (
  <View style={styles.mainContainer}>
    <HeaderContainer />
    <View>
      {children}
    </View>
    <Loading />
    <ToastContainer />
  </View>
);

export default Main;
