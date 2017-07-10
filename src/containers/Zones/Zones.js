/**
 * Module with the Zones screen component that
 * will display a list of zones assigned to an user.
 * @module src/container/Zones/Zones.
 * @flow
 */
// React.
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Types.
import type {
  AppState,
  ReduxDispatch,
  Zone,
  ZonesProps
} from '../../utils/app-types';

// Components.
import { ListButton } from '../../components/';

// Libs.
import transmuter from '../../libs/transmuter';

// Constants.
import { ORDERS_PATH } from '../../constants/screens';

// Styles.
import styles from './styles';

class Zones extends Component {
  props: ZonesProps;
  dataSource: ListView.DataSource;

  constructor(props, context) {
    super(props, context);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1: Zone, r2: Zone): boolean => (r1.zoneId !== r2.zoneId)
    });
  }

  handleZonePress = (zoneId: string) => () => {
    this.props.push(`${ORDERS_PATH}/${zoneId}`);
  };

  renderRow = (zone: Zone): ReactElement<ListButton> => {
    return (
      <ListButton
        onPress={this.handleZonePress(zone.zoneId)}
        text={`Número de Pedidos: ${zone.orders}`}
        title={`Zona: ${zone.zoneId}`}
      />
    );
  };

  render() {
    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(this.props.zones)}
        enableEmptySections
        renderRow={this.renderRow}
        style={styles.listContainer}
      />
    );
  }
}

const mapStateToProps = ({ orders }: AppState) => ({
  zones: transmuter.toZones(orders)
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    push
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Zones);
