/**
 * Module with the TextForm input component.
 * @module src/components/TextForm
 * @flow
 */
// React.
import React from 'react';
import { TextInput, View } from 'react-native';

// Components.
import TextFormIcon from './TextFormIcon';

// Utils.
import { array } from '../../utils/helpers';
import noop from '../../utils/noop';

// Constants.
import { BRAND, ERROR, GREY } from '../../constants/colors';
import { TRANSPARENT } from '../../constants/strings';
import {
  DEFAULT_KEYBOARD,
  DONE_KEYBOARD
} from '../../constants/types';

// Styles.
import formStyles from './styles';

// Types.
import type { TextFormProps } from '../../utils/app-types';

//
// Component.
// -----------------------------------------------------------------------------
const TextForm = ({
  containerStyles,
  keyboardType,
  placeholder,
  placeholderTextColor,
  onChangeText,
  returnKeyType,
  secureTextEntry,
  styles,
  valid,
  value
}: TextFormProps) => {
  const fieldColor = (valid) ? GREY : ERROR;
  const selectionColor = (valid) ? BRAND : ERROR;
  const computedStyles = formStyles({ color: fieldColor });
  const shrinkedStyles = {
    container: array.shrink([computedStyles.container, containerStyles]),
    field: array.shrink([computedStyles.field, styles])
  };

  return (
    <View style={shrinkedStyles.container}>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        selectionColor={selectionColor}
        style={shrinkedStyles.field}
        underlineColorAndroid={TRANSPARENT}
        value={value}
      />
      <TextFormIcon show={!valid} />
    </View>
  );
};

TextForm.defaultProps = {
  keyboardType: DEFAULT_KEYBOARD,
  onChangeText: noop,
  placeholder: '',
  placeholderTextColor: GREY,
  returnKeyType: DONE_KEYBOARD,
  secureTextEntry: false,
  valid: true
};

export default TextForm;
