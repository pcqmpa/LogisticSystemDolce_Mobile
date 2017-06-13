/**
 * Module with the component configuration HOC.
 * @module src/utils/configure-component
 * @flow
 */
// React.
import React from 'react';

// Utils.
import { array } from './helpers/';

// Types.
declare type Props = {
  theme: number,
  layout: number
};

/**
 * HOC the pre configure a component with several utilities.
 * @param {ReactElement} WrappedComponent -> The component to configure.
 * @returns {ReactElement} -> The configured component.
 */
const configComponent = (WrappedComponent: ReactClass<any>, componentStyles: ?number) => {
  const ConfiguredComponent = ({
    theme,
    layout,
    ...props
  }: Props) => {
    const styles = array.shrink([
      componentStyles,
      theme,
      layout
    ]);

    return (
      <WrappedComponent
        {...props}
        styles={styles}
      />
    );
  };

  return ConfiguredComponent;
};

export default configComponent;
