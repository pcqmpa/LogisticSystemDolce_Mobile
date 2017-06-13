/**
 * Module with the Orders screen container.
 * @module src/containers/Orders/Orders
 * @flow
 */
// React.
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from 'react-router-native';

// Types.
import type { Match } from 'react-router';

// Components.
import {
  Button,
  Card,
  Column,
  DataItem,
  Divider,
  Grid,
  TextForm,
  Toast
} from '../../components/';

// Constants.
import { ORDER_DETAILS } from '../../constants/screens';

import image from '../../images/test';

const dim = Dimensions.get('window');

const Orders = ({ match }: { match: Match }) => (
  <ScrollView style={{ height: (dim.height - 60) }}>
    <Text>Screen: {match.path}</Text>
    <Link to={ORDER_DETAILS}>
      <Text>Order Details</Text>
    </Link>
    <View>
      <TextForm placeholder="placeholder" />
    </View>
    <View>
      <Button>
        Button
      </Button>
    </View>
    <View>
      <Card />
      <Divider />
      <Card />
    </View>
    <View style={{ width: dim.width, height: 40 }}>
      <Grid>
        <Column styles={{ flex: 40 }}>
          <Text>1</Text>
        </Column>
        <Column styles={{ flex: 60 }}>
          <Text>2</Text>
        </Column>
      </Grid>
    </View>
    <View>
      <DataItem
        keyText="Key"
        valueText="Value"
      />
      <Divider />
      <DataItem
        keyText="Key"
        valueText="Value"
      />
    </View>
    <View>
      <Divider />
      <DataItem
        keyText="Image"
        image={image}
      />
      <Divider />
      <DataItem
        keyText="Image"
        image={image}
      />
    </View>
    <View>
      <Toast
        message="This is my long message to display"
        type="red"
      />
    </View>
  </ScrollView>
);

export default Orders;
