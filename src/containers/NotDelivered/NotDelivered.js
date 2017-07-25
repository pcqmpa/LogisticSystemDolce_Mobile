/**
 * Module with the NotDelivered screen component that
 * will hold the form to notify a not delivered order.
 * @module src/containers/NotDelivered/NotDelivered
 * @flow
 */
// React.
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

// Types.
import type {
  AppState,
  NotDeliveredProps,
  Order,
  ReduxDispatch
} from '../../utils/app-types';

// Components.
import {
  Button,
  Column,
  Grid,
  TextForm
} from '../../components/';

// Actions.
import {
  notifyNotDeliveredOrder,
  updateOrderMessage
} from '../../actions/orders';

// Constants.
import { BRAND_DARK } from '../../constants/colors';
import { ORDER_DETAILS_PATH } from '../../constants/screens';
import {
  HEADER_HEIGHT,
  REGULAR_TEXT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../constants/values';

class NotDelivered extends Component {
  props: NotDeliveredProps;

  handleCancelPress = () => {
    this.props.replace(`${ORDER_DETAILS_PATH}/${this.props.match.params.orderId}`);
  };

  handleMessageChange = (value: string) => {
    const { order } = this.props;
    this.props.updateOrderMessage((order.id || ''), value);
  };

  handleNotifyNotDeliveredOrder = () => {
    this.props.notifyNotDeliveredOrder(this.props.order.NumPedido || 0);
  };

  render() {
    const { order } = this.props;

    return (
      <View style={{
        height: (WINDOW_HEIGHT - HEADER_HEIGHT),
        padding: 15,
        width: WINDOW_WIDTH
      }}>
        <View>
          <Text style={{
            fontSize: REGULAR_TEXT
          }}>
            Escriba un comentario antes de enviar:
          </Text>
          <TextForm
            multiline
            onChangeText={this.handleMessageChange}
            placeholder="Comentario"
            styles={{
              height: 120,
              marginTop: 20,
              textAlignVertical: 'top'
            }}
            value={order.message}
          />
        </View>
        <View style={{
          flex: 1,
          paddingTop: 15
        }}>
          <Grid>
            <Column>
              <Button
                disabled={!order.message || order.message === ''}
                onPress={this.handleNotifyNotDeliveredOrder}
                theme={BRAND_DARK}
              >
                Enviar
              </Button>
            </Column>
            <Column>
              <Button
                onPress={this.handleCancelPress}
              >
                Cancelar
              </Button>
            </Column>
          </Grid>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: NotDeliveredProps) => ({
  order: state.orders.find((order: Order) => (
    order.id === ownProps.match.params.orderId
  ))
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    notifyNotDeliveredOrder,
    replace,
    updateOrderMessage
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotDelivered);
