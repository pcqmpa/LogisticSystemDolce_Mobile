/**
 * Module with the Toast Container component.
 * @module src/containers/layouts/ToastContainer
 */
// React - Redux.
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// React Native.
import {
  View,
  Modal
} from 'react-native';

// Components.
import { Toast } from '../../components/';

// Utils.
import { noop } from '../../utils';

// Constants.
import { FADE } from '../../constants/types';

// Styles.
import { toastContainerStyles } from '../../styles/containers/';

const ToastContainer = ({ show, message }) => (
  <Modal
    transparent
    visible={show}
    animationType={FADE}
    onRequestClose={noop}
  >
    <View style={toastContainerStyles.container}>
      <Toast message={message} />
    </View>
  </Modal>
);

ToastContainer.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string
};

ToastContainer.defaultProps = {
  show: false,
  message: ''
};

const mapStateToProps = state => ({
  ...state.common.toast
});

export default connect(
  mapStateToProps
)(ToastContainer);
