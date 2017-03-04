/**
 * Module with the Button component styles.
 * @module src/styles/components/form/button
 */
// Values.
import {
  colors,
  variables
} from '../../values/';

export const button = {
  padding: variables.button.padding,
  elevation: variables.button.elevation,
  backgroundColor: colors.brand
};

export const buttonText = {
  color: colors.white,
  fontSize: variables.button.fontSize,
  textAlign: 'center'
};
