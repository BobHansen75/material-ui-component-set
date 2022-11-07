import {
  color,
  ThemeColor,
  toggle,
  sizes,
  size,
  buttongroup,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const subViewOptions = {
  backgroundColor: color('Background color', { value: ThemeColor.TRANSPARENT }),
  outerSpacing: sizes('Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),
  borderColor: color('Border color', {
    value: ThemeColor.ACCENT_1,
  }),
  borderWidth: size('Border thickness', {
    value: '1px',
    configuration: {
      as: 'UNIT',
    },
  }),
  borderStyle: buttongroup(
    'Border style',
    [
      ['None', 'none'],
      ['Solid', 'solid'],
      ['Dashed', 'dashed'],
      ['Dotted', 'dotted'],
    ],
    {
      value: 'solid',
      configuration: {
        dataType: 'string',
      },
    },
  ),
  borderRadius: size('Border radius', {
    value: '3px',
    configuration: {
      as: 'UNIT',
    },
  }),
  dense: toggle('Dense', { value: false }),

  ...advanced('Subview'),
};