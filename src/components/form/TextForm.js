/**
 * Module with a custom text input component.
 * @module src/components/form/TextForm.
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import { View, TextInput } from 'react-native';

// Components.
import { TextFormIcon } from '../';

// Utils.
import {
  noop,
  componentHelpers
} from '../../utils/';

// Styles.
import { formStyles } from '../../styles/components/';
import { colors } from '../../styles/values/';

const TextForm = ({
  style,
  theme,
  layout,
  value,
  valid,
  onChangeText,
  returnKeyType,
  placeholder,
  placeholderTextColor,
  secureTextEntry
}) => {
  const styles = componentHelpers
    .concatStyles(formStyles.textForm, [
      theme,
      layout,
      style
    ]);

  return (
    <View style={formStyles.textFormContainer}>
      <TextInput
        style={styles}
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={colors.greyDarker}
      />
      <TextFormIcon
        show={!valid}
        style={formStyles.validIconTextForm}
      />
    </View>
  );
};

TextForm.propTypes = {
  style: PropTypes.number,
  theme: PropTypes.number,
  layout: PropTypes.number,
  value: PropTypes.string,
  valid: PropTypes.bool,
  onChangeText: PropTypes.func,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  secureTextEntry: PropTypes.bool
};

TextForm.defaultProps = {
  style: null,
  theme: null,
  layout: null,
  value: '',
  valid: true,
  onChangeText: noop,
  returnKeyType: 'done',
  placeholder: '',
  placeholderTextColor: '#CCCCCC',
  secureTextEntry: false
};

export default TextForm;
