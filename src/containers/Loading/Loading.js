/**
 * Module with the Loading container component.
 * @module src/containers/Loading/Loading
 * @flow
 */
// React.
import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

// Types.
import type {
  AppState,
  LoadingProps
} from '../../utils/app-types';

// Constants.
import { BRAND_DARK, WHITE } from '../../constants/colors';

// Styles.
import styles from './styles';

const Loading = ({ label, show }: LoadingProps) => (
  <Spinner
    color={BRAND_DARK}
    overlayColor={WHITE}
    textContent={label}
    textStyle={styles.label}
    visible={show}
  />
);

Loading.defaultProps = {
  label: '',
  show: false
};

const mapStateToProps = ({ common }: AppState) => ({
  ...common.loading
});

export default connect(mapStateToProps)(Loading);
