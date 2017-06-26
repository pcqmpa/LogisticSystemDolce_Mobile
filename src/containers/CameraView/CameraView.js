/**
 * Module with the CameraView container component.
 * @module src/containers/CameraView/CameraView
 * @flow
 */
// React.
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Camera from 'react-native-camera';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

// Types.
import type {
  CameraElement,
  CameraViewProps,
  PictureShot,
  ReduxDispatch
} from '../../utils/app-types';

// Components.
import { ButtonIcon } from '../../components/';

// Actions.
import { shotPicture } from '../../actions/picture-preview';

// Constants.
import {
  GREY,
  WHITE
} from '../../constants/colors';
import {
  ARROW_LEFT_THICK,
  CAMERA_IRIS
} from '../../constants/icons';
import { ABSOLUTE } from '../../constants/strings';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

// Styles.
import styles from './styles';

class CameraView extends Component {
  props: CameraViewProps;
  cameraElement: CameraElement;

  handleBackButtonPress = () => {
    this.props.goBack();
  };

  setCameraReference = (reference: CameraElement) => {
    this.cameraElement = reference;
  };

  takePicture = () => {
    this.props.shotPicture(this.cameraElement);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          aspect={Camera.constants.Aspect.fill}
          ref={this.setCameraReference}
          style={styles.camera}
        >
          <ButtonIcon
            icon={ARROW_LEFT_THICK}
            iconStyle={styles.backButtonIcon}
            onPress={this.handleBackButtonPress}
            style={styles.backButtonContainer}
          />
          <ButtonIcon
            icon={CAMERA_IRIS}
            iconStyle={styles.shotButtonIcon}
            onPress={this.takePicture}
            style={styles.shotButtonContainer}
          />
        </Camera>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    goBack,
    shotPicture
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps
)(CameraView);
