/**
 * Module with the ToastContainer component.
 * @module src/containers/ToastContainer/ToastContainer
 * @flow
 */
// React.
import React from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

// Types.
import type {
  AppState,
  ToastContainerProps
} from '../../utils/app-types';

// Components.
import { Toast } from '../../components/';

// Utils.
import noop from '../../utils/noop';

// Constants.
import { BRAND_DARK } from '../../constants/colors';
import { FADE } from '../../constants/types';

// Styles.
import styles from './styles';

const ToastContainer = ({ message, show, type }: ToastContainerProps) => (
  <Modal
    animationType={FADE}
    onRequestClose={noop}
    transparent
    visible={show}
  >
    <View style={styles.container}>
      <Toast
        message={message}
        type={type}
      />
    </View>
  </Modal>
);

ToastContainer.defaultProps = {
  show: false,
  type: BRAND_DARK
};

const mapStateToProps = ({ common }: AppState) => ({
  ...common.toast
});

export default connect(mapStateToProps)(ToastContainer);
