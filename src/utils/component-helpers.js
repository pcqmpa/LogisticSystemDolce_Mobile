/**
 * Module with some helpers for the components.
 * @module src/utils/component-helpers
 * @flow
 */
// Utils.
import { array } from './helpers/';

// Types.
import type {
  CookedStyles,
  CookStylesOptions,
  Styles
} from './app-types';

export const cookStyles =
  (styles: Styles, errorStyles: Styles, options: CookStylesOptions): CookedStyles => {
    console.log(styles);
    return Object.keys(styles).reduce((computedStyles, style) => {
      const stylesCollection = [styles[style]];
      if (!options.valid) {
        stylesCollection.push(errorStyles[style]);
      }

      return {
        ...computedStyles,
        [style]: array.shrink(stylesCollection)
      };
    }, {});
  };
