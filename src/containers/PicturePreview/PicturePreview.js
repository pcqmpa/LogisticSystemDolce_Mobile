/**
 * Module with the PicturePreview screen component.
 * @module src/containers/PicturePreview/PicturePreview
 * @flow
 */
// React.
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Link } from 'react-router-native';

// Components.
import { Button } from '../../components/';

// Sources.
import test from '../../images/test';

// Constants.
import { LOGIN } from '../../constants/screens';
import {
  WINDOW_WIDTH
} from '../../constants/values';

class PicturePreview extends Component {
  render() {
    return (
      <View style={{
        height: 200,
        width: WINDOW_WIDTH
      }}>
        <Image
          source={test}
        />
      </View>
    );
  }
}

export default PicturePreview;
