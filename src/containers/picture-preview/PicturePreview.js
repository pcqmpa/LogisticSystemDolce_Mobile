/**
 * Module with the picture preview container component.
 * @module src/containers/picture-preview/PicturePreview
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
import { LOGIN } from '../../constants/scenes';

class PicturePreview extends Component {
  static propTypes = {
    pushScene: PropTypes.func.isRequired
  };

  static defaultProps = {
    pushScene: noop
  };

  handleChangeToOrders = () => {
    this.props.pushScene(LOGIN);
  }

  render() {
    return (
      <View>
        <Text>Picture Preview</Text>
        <TouchableOpacity onPress={this.handleChangeToOrders}>
          <Text>Go to login</Text>
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
)(PicturePreview);
