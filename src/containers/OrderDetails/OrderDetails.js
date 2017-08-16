/**
 * Module with the OrderDetails screen component.
 * @module src/containers/OrderDetails/OrderDetails
 * @flow
 */
// React.
import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
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
  Column,
  DataImage,
  DataItem,
  Divider,
  Grid
} from '../../components/';

// Actions.
import { deliverOrder } from '../../actions/orders';
import {
  setPictureToPreview,
  setPictureType
} from '../../actions/picture-preview';

// Utils.
import str from '../../utils/helpers/string';

// Constants.
import { BRAND_DARK, GREY } from '../../constants/colors';
import { PACKAGE_VARIANT_CLOSED } from '../../constants/icons';
import {
  CAMERA_VIEW,
  ORDER_NOT_DELIVERED_PATH,
  PICTURE_PREVIEW
} from '../../constants/screens';
import {
  CODE,
  OrderStateEnum,
  PACKAGE,
  REWARDS
} from '../../constants/types';
import { ORDER_DETAILS } from '../../constants/values';

// Styles.
import styles from './styles';

class OrderDetails extends Component {
  props: OrderDetailsProps;

  componentDidMount() {
    console.log(this.props);
  }

  cannotBeSubmitted = (): boolean => {
    const { order } = this.props;
    return (
      !order.pictures.code ||
      !order.pictures.package ||
      order.state === OrderStateEnum.DELIVERED ||
      !!order.Entregado
    );
  };

  cannotNotifyNotDelivered = (): boolean => {
    const { order } = this.props;
    return (
      order.state === OrderStateEnum.NOT_DELIVERED ||
      order.state === OrderStateEnum.DELIVERED
    );
  };

  handleNotDeliveredPress = () => {
    const orderId: string = this.props.order.id || '';
    this.props.replace(`${ORDER_NOT_DELIVERED_PATH}/${orderId}`);
  };

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
            valueText={str.capitalize((order.StrNombreAsesora || '').toLocaleLowerCase())}
          />
          <Divider />
          <DataItem
            keyText="Identificación"
            valueText={order.StrIdentificacion}
          />
          <Divider />
          <DataItem
            hide={order.StrTipoEmpaque !== REWARDS}
            keyText="Descripción Premios"
            valueText={(order.StrDescripcionPremio || '').toLowerCase()}
          />
          <Divider hide={order.StrTipoEmpaque !== REWARDS} />
          <DataItem
            hide={order.StrTipoEmpaque !== REWARDS}
            keyText="Cantidad de Premios"
            valueText={order.IntCantidadPremio}
          />
          <Divider hide={order.StrTipoEmpaque !== REWARDS} />
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
          <Grid>
            <Column>
              <Button
                disabled={this.cannotBeSubmitted()}
                onPress={this.handleSubmitOrderPress}
                theme={BRAND_DARK}
              >
                {(order.state === OrderStateEnum.DELIVERED) ? 'Entregado' : 'Entregar'}
              </Button>
            </Column>
            <Column>
              <Button
                disabled={this.cannotNotifyNotDelivered()}
                onPress={this.handleNotDeliveredPress}
              >
                No entregado
              </Button>
            </Column>
          </Grid>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ orders }: AppState, ownProps: OrderDetailsProps) => ({
  order: orders.find((order: Order) => (order.id === ownProps.match.params.orderId))
});

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
  bindActionCreators({
    deliverOrder,
    push,
    replace,
    setPictureToPreview,
    setPictureType
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);
