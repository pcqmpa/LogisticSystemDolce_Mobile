/**
 * Module with the PicturePreview screen component.
 * @module src/containers/PicturePreview/PicturePreview
 * @flow
 */
// React.
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

// Utils.
import type { Match } from '../../utils/app-types';

// Constants.
import { LOGIN } from '../../constants/screens';

const PicturePreview = ({ match }: { match: Match }) => (
  <View>
    <Text>Screen: {match.path}</Text>
    <Link to={LOGIN}>
      <Text>Login</Text>
    </Link>
  </View>
);

export default PicturePreview;
