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

const TextForm = ({
  style,
  theme,
  layout,
  value,
  onChange,
  returnKeyType,
  placeholder,
  placeholderTextColor
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
      onChange={onChange}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

TextForm.propTypes = {
  style: PropTypes.number,
  theme: PropTypes.number,
  layout: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string
};

TextForm.defaultProps = {
  style: null,
  theme: null,
  layout: null,
  value: '',
  onChange: noop,
  returnKeyType: 'done',
  placeholder: '',
  placeholderTextColor: '#CCCCCC'
};

export default TextForm;
