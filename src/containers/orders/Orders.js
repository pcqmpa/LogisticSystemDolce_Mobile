/**
 * Module with the Orders screen container.
 * @module src/containers/Orders/Orders
 * @flow
 */
// React.
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Types.
import type { Match } from 'react-router';
import type {
  AppState,
  ReduxDispatch,
  Order,
  OrdersProps
} from '../../utils/app-types';

// Components.
import { Card, Divider } from '../../components/';

// Constants.
import { ORDER_DETAILS_PATH } from '../../constants/screens';
import {
  HEADER_HEIGHT,
  WINDOW_HEIGHT
} from '../../constants/values';

class Orders extends Component {
  props: OrdersProps;
  dataSource: ListView.DataSource;

  constructor(props: OrdersProps, context: any) {
    super(props, context);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1: Order, r2: Order): boolean => (r1.id !== r2.id)
    });
  }

  handleCardPress = (orderId: string) => () => {
    this.props.push(`${ORDER_DETAILS_PATH}/${orderId}`);
  }

  renderRow = (order: Order): ReactElement<Card> => {
    return (
      <Card
        onPress={this.handleCardPress}
        order={order}
      />
    );
  };

  renderSeparator = (): ReactElement<Divider> => {
    return (<Divider />);
  }

  render() {
    const { orders } = this.props;

    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(orders)}
        enableEmptySections
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        style={{ height: (WINDOW_HEIGHT - HEADER_HEIGHT - 20) }}
      />
    );
  }
}

const mapStateToProps = ({ orders }: AppState, ownProps: OrdersProps) => {
  const match: Match = ownProps.match;
  return {
    orders: orders.filter((order: Order) => (
      order.StrZona === match.params.zoneId
    ))
  };
};

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    push
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
