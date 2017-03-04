/**
 * Module with the order container component.
 * @module src/containers/orders/Order
 */
// React - Redux.
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// React Native.
import {
  View,
  Text,

  TouchableOpacity
} from 'react-native';

// Actions.
import { push } from '../../actions/navigation';

// Utils.
import { noop } from '../../utils/';

// Constants.
import { PICTURE_PREVIEW } from '../../constants/scenes';

class Order extends Component {
  static propTypes = {
    pushScene: PropTypes.func.isRequired
  };

  static defaultProps = {
    pushScene: noop
  };

  handleChangeToOrders = () => {
    this.props.pushScene(PICTURE_PREVIEW);
  }

  render() {
    return (
      <View>
        <Text>Order</Text>
        <TouchableOpacity onPress={this.handleChangeToOrders}>
          <Text>Go to picture preview</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    pushScene: push
  }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps
)(Order);
