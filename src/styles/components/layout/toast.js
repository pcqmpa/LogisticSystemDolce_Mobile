/**
 * Module with the Toast component styles.
 * @module src/styles/components/layout/toast
 */
// Values.
import { colors } from '../../values/';

export const toast = {
  width: 260,
  height: 90,
  bottom: 70,
  padding: 10,
  elevation: 4,
  borderRadius: 4,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.brand
};

export const toastText = {
  fontSize: 14,
  color: colors.white,
  textAlign: 'center'
};
