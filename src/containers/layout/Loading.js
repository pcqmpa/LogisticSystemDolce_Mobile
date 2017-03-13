/**
 * Module with the Loading container.
 * @module src/containers/layout/Loading
 */
// React - Redux.
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// React Native.
import Spinner from 'react-native-loading-spinner-overlay';

// Actions.
import { toggleLoading } from '../../actions/common';

// Constants.
import { LOADING_TEXT } from '../../constants/strings';

// Styles.
import { colors } from '../../styles/values/';
import themes from '../../styles/themes/';

const Loading = ({ show }) => (
  <Spinner
    visible={show}
    color={colors.brand}
    textStyle={themes.spinnerText}
    textContent={LOADING_TEXT}
    overlayColor={colors.white}
  />
);

Loading.propTypes = {
  show: PropTypes.bool
};

Loading.defaultProps = {
  show: false
};

const mapStateToProps = state => ({
  show: state.common.loading
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleLoading
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
