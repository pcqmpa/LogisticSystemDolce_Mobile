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

// Components.
import { Check } from '../';

// Utils.
import noop from '../../utils/noop';

// Styles.
import styles from './styles';

// Types.
import type {
  CardProps,
  Order
} from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const Card = ({ onPress, order }: CardProps) => (
  <TouchableOpacity onPress={onPress(order.id)}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.mainField}>
          <Text style={styles.fieldsText}>#{order.NumPedido}</Text>
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
            checked={order.Entregado}
            containerStyles={styles.check}
          />
        </View>
      </View>
      <View style={styles.mainField}>
        <Text style={styles.fieldsText}>Asesora: {order.StrNombreAsesora}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

Card.defaultProps = {
  onPress: noop,
  order: {}
};

export default Card;
