import {
  variable,
  size,
  icon,
  option,
  hideIf,
  toggle,
} from '@betty-blocks/component-sdk';
import { advanced } from './advanced';

export const options = {
  label: variable('Tab label', { value: ['TAB'] }),
  height: size('Height', {
    value: '',
    configuration: {
      as: 'UNIT',
    },
  }),
  width: size('Width', {
    value: '',
    configuration: {
      as: 'UNIT',
    },
  }),
  icon: icon('Icon', { value: 'None' }),
  iconAlignment: option('CUSTOM', {
    label: 'Icon Alignment',
    value: 'top',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Left', value: 'left' },
        { name: 'Top', value: 'top' },
        { name: 'Right', value: 'right' },
        { name: 'Bottom', value: 'bottom' },
      ],
      condition: hideIf('icon', 'EQ', 'None'),
    },
  }),
  disabled: toggle('Disabled', { value: false }),
  disabledRipple: toggle('Disable ripple', { value: false }),

  ...advanced,
};

// For tomorrow: finish the stepper and probably check
// on the other components, because they don't have a style: yet