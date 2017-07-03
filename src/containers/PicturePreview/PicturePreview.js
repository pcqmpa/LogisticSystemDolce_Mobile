/**
 * Module with the PicturePreview screen component.
 * @module src/containers/PicturePreview/PicturePreview
 * @flow
 */
// React.
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';

// Types.
import type {
  AppState,
  ReduxDispatch,
  PicturePreviewProps
} from '../../utils/app-types';

// Components.
import {
  Button,
  Column,
  Grid
} from '../../components/';

// Actions.
import {
  clearPicturePreview,
  setRetakePicture,
  storePicture
} from '../../actions/picture-preview';

// Sources.
import test from '../../images/test';

// Constants.
import { BRAND_DARK } from '../../constants/colors';
import { CAMERA_VIEW, LOGIN } from '../../constants/screens';
import {
  COLUMN,
  IMAGE_STRETCH
} from '../../constants/types';

// Styles.
import styles from './styles';

class PicturePreview extends Component {
  props: PicturePreviewProps;

  handleFirstButtonPress = () => {
    if (this.props.firstPreview) {
      this.props.storePicture();
      return;
    }

    this.props.setRetakePicture();
    this.props.push(CAMERA_VIEW);
  };

  handleSecondButtonPress = () => {
    if (this.props.firstPreview) {
      this.props.setRetakePicture();
      this.props.push(CAMERA_VIEW);
      return;
    }

    this.props.clearPicturePreview();
    this.props.goBack();
  };

  render() {
    const { firstPreview, picture } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          <Image
            resizeMode={IMAGE_STRETCH}
            source={{ uri: picture }}
            style={styles.picture}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Grid direction={COLUMN}>
            <Column style={styles.buttonColumn}>
              <View style={styles.buttonWrapper}>
                <Button
                  onPress={this.handleFirstButtonPress}
                  theme={BRAND_DARK}
                >
                  {(firstPreview) ?  'Aceptar' : 'Cambiar'}
                </Button>
              </View>
            </Column>
            <Column style={styles.buttonColumn}>
              <View style={styles.buttonWrapper}>
                <Button
                  onPress={this.handleSecondButtonPress}
                >
                  {(firstPreview)? 'Cambiar' : 'Volver'}
                </Button>
              </View>
            </Column>
          </Grid>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ picturePreview }: AppState) => ({
  ...picturePreview
});

const mapDispatchProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    clearPicturePreview,
    goBack,
    push,
    setRetakePicture,
    storePicture
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchProps
)(PicturePreview);
