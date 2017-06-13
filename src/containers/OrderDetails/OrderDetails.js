/**
 * Module with the OrderDetails screen component.
 * @module src/containers/OrderDetails/OrderDetails
 * @flow
 */
// React.
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

// Utils.
import type { Match } from '../../utils/app-types';

// Constants.
import { PICTURE_PREVIEW } from '../../constants/screens';

const OrderDetails = ({ match }: { match: Match }) => (
  <View>
    <Text>Screen: {match.path}</Text>
    <Link to={PICTURE_PREVIEW}>
      <Text>Picture</Text>
    </Link>
  </View>
);

export default OrderDetails;
