/**
 * Module with the Card component.
 * @module src/components/Card/Card
 * @flow
 */
// React.
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Types.
import type {
  CardProps
} from '../../utils/app-types';

// Components.
import { Check } from '../';

// Utils.
import str from '../../utils/helpers/string';
import noop from '../../utils/noop';

// Constants.
import { OrderStateEnum } from '../../constants/types';

// Styles.
import styles from './styles';

//
// Component.
// -----------------------------------------------------------------------------
const Card = ({ onPress, order }: CardProps) => (
  <TouchableOpacity onPress={onPress(order.id)}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.mainField}>
          <Text style={styles.fieldsText}>#{order.NumPedido} - {order.NumNumeroPedido}</Text>
        </View>
        <View style={styles.secondaryField}>
          <Text style={[styles.fieldsText, styles.fieldsTextRight]}>
            {order.StrZona}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.mainField}>
          <Text style={styles.fieldsText}>Tipo: {order.StrTipoEmpaque}</Text>
        </View>
        <View style={styles.secondaryField}>
          <Check
            checked={order.state === OrderStateEnum.DELIVERED}
            containerStyles={styles.check}
          />
        </View>
      </View>
      <View style={[styles.mainField, styles.assesorNameContainer]}>
        <Text style={styles.fieldsText}>
          Asesora:{' '}
          <Text style={[styles.fieldsText, styles.assesorName]}>
            {str.capitalize((order.StrNombreAsesora || '').toLocaleLowerCase())}
          </Text>
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

Card.defaultProps = {
  onPress: noop,
  order: {}
};

export default Card;
