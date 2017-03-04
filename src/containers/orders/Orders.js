/**
 * Module with the orders container component.
 * @module src/containers/orders/Orders
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
import { ORDER } from '../../constants/scenes';

class Orders extends Component {
  static propTypes = {
    pushScene: PropTypes.func.isRequired
  };

  static defaultProps = {
    pushScene: noop
  };

  handleChangeToOrders = () => {
    this.props.pushScene(ORDER);
  }

  render() {
    return (
      <View>
        <Text>Orders</Text>
        <TouchableOpacity onPress={this.handleChangeToOrders}>
          <Text>Go to order</Text>
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
)(Orders);
