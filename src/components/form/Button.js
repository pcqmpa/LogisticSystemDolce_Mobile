/**
 * Module with the Button component.
 * @module src/components/form/Button
 */
// React.
import React, { PropTypes } from 'react';

// React Native.
import {
  Text,
  TouchableOpacity
} from 'react-native';

// Utils.
import {
  noop,
  componentHelpers
} from '../../utils/';

// Styles.
import { formStyles } from '../../styles/components/';

const Button = ({
  children,
  style,
  theme,
  layout,
  textTheme,
  disabled,
  onPress
}) => {
  const styles = componentHelpers
    .concatStyles(formStyles.button, [
      theme,
      layout,
      style
    ]);

  const textStyles = componentHelpers
    .concatStyles(formStyles.buttonText, [
      textTheme
    ]);


  return (
    <TouchableOpacity
      style={styles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={textStyles}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.number,
  theme: PropTypes.number,
  layout: PropTypes.number,
  textTheme: PropTypes.number,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
};

Button.defaultProps = {
  children: '',
  style: null,
  theme: null,
  layout: null,
  textTheme: null,
  disabled: false,
  onPress: noop
};

export default Button;
