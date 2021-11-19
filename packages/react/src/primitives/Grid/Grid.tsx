import * as React from 'react';
import classNames from 'classnames';

import { ComponentClassNames } from '../shared/constants';
import { GridProps, PrimitiveWithForwardRef } from '../types';
import { View } from '../View';

const GridInner: PrimitiveWithForwardRef<GridProps, 'div'> = (
  { className, children, ...rest },
  ref
) => (
  <View
    className={classNames(ComponentClassNames.Grid, className)}
    ref={ref}
    {...rest}
  >
    {children}
  </View>
);

export const Grid = React.forwardRef(GridInner);

Grid.displayName = 'Grid';