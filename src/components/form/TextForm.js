/**
 * Module with a custom text input component.
 * @module src/components/form/TextForm.
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import { TextInput } from 'react-native';

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
  );
};

TextForm.propTypes = {
  style: PropTypes.number,
  theme: PropTypes.number,
  layout: PropTypes.number,
  value: PropTypes.string,
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
  onChangeText: noop,
  returnKeyType: 'done',
  placeholder: '',
  placeholderTextColor: '#CCCCCC',
  secureTextEntry: false
};

export default TextForm;
