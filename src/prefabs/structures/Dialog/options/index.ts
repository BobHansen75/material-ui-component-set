import { toggle, option } from '@betty-blocks/component-sdk';
import { advanced } from './advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute', 'invisible'],
  },
];

export const dialogOptions = {
  isVisible: toggle('Visible in builder', {
    value: false,
    configuration: { as: 'VISIBILITY' },
  }),
  runTimeVisibility: option('CUSTOM', {
    label: 'Initial State',
    value: 'false',
    configuration: {
      as: 'BUTTONGROUP',
      allowedInput: [
        { name: 'Visible', value: 'true' },
        { name: 'Hidden', value: 'false' },
      ],
    },
  }),
  isFullscreen: toggle('Fullscreen', {
    value: false,
  }),
  disableClick: toggle('Disable backdrop click', {
    value: false,
  }),
  width: option('CUSTOM', {
    value: 'sm',
    label: 'Width',
    configuration: {
      as: 'DROPDOWN',
      dataType: 'string',
      allowedInput: [
        { name: 'Extra-small', value: 'xs' },
        { name: 'Small', value: 'sm' },
        { name: 'Medium', value: 'md' },
        { name: 'Large', value: 'lg' },
        { name: 'Extra-large', value: 'xl' },
      ],
    },
  }),

  ...advanced,
};
