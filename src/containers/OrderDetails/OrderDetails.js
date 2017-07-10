/**
 * Module with the OrderDetails screen component.
 * @module src/containers/OrderDetails/OrderDetails
 * @flow
 */
// React.
import React, { Component } from 'react';
import {
  NativeModules,
  ScrollView,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Types.
import type {
  AppState,
  Order,
  OrderDetailsProps,
  PictureType,
  ReduxDispatch
} from '../../utils/app-types';

// Components.
import {
  Button,
  DataImage,
  DataItem,
  Divider
} from '../../components/';

// Actions.
import { deliverOrder } from '../../actions/orders';
import {
  setPictureToPreview,
  setPictureType
} from '../../actions/picture-preview';

// Constants.
import { GREY } from '../../constants/colors';
import { PACKAGE_VARIANT_CLOSED } from '../../constants/icons';
import {
  CAMERA_VIEW,
  PICTURE_PREVIEW
} from '../../constants/screens';
import {
  CODE,
  PACKAGE
} from '../../constants/types';
import { ORDER_DETAILS } from '../../constants/values';

// Styles.
import styles from './styles';

class OrderDetails extends Component {
  props: OrderDetailsProps;

  handlePictureItemPress = (type: PictureType, picture?: string | null) => () => {
    if (!picture) {
      this.props.setPictureType(type);
      this.props.push(CAMERA_VIEW);
      return;
    }

    this.props.push(PICTURE_PREVIEW);
    this.props.setPictureToPreview(picture, type);
  };

  handleSubmitOrderPress = () => {
    this.props.deliverOrder(this.props.order);
  };

  cannotBeSubmitted = (): boolean => {
    const { order } = this.props;
    return (
      !order.pictures.code ||
      !order.pictures.package ||
      order.retrieved ||
      !!order.Entregado
    );
  };

  render() {
    const { order } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            color={GREY}
            name={PACKAGE_VARIANT_CLOSED}
            size={ORDER_DETAILS.ICON_SIZE}
          />
        </View>
        <View>
          <DataItem
            keyText="Zona"
            valueText={order.StrZona}
          />
          <Divider />
          <DataItem
            keyText="Tipo Empaque"
            valueText={order.StrTipoEmpaque}
          />
          <Divider />
          <DataItem
            keyText="Departamento"
            valueText={order.StrDepartamento}
          />
          <Divider />
          <DataItem
            keyText="Población"
            valueText={order.StrPoblacion}
          />
          <Divider />
          <DataItem
            keyText="Ciudad"
            valueText={order.StrCiudad}
          />
          <Divider />
          <DataItem
            keyText="Barrio"
            valueText={order.StrBarrio}
          />
          <Divider />
          <DataItem
            keyText="Dirección"
            valueText={order.StrDireccion}
          />
          <Divider />
          <DataItem
            keyText="Telefonos"
            valueText={order.StrTelefono}
          />
          <Divider />
          <DataItem
            keyText="Asesora"
            valueText={order.StrNombreAsesora}
          />
          <Divider />
          <DataImage
            keyText="Foto Código"
            onPress={this.handlePictureItemPress(CODE, order.pictures.code)}
            picture={order.pictures.code}
          />
          <Divider />
          <DataImage
            keyText="Foto Pedido"
            onPress={this.handlePictureItemPress(PACKAGE, order.pictures.package)}
            picture={order.pictures.package}
          />
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={this.cannotBeSubmitted()}
            onPress={this.handleSubmitOrderPress}
          >
            {(order.retrieved) ? 'Entregado' : 'Entregar'}
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ common, orders }: AppState) => ({
  order: orders.find((order: Order) => (order.NumPedido === common.order))
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    deliverOrder,
    push,
    setPictureToPreview,
    setPictureType
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);
