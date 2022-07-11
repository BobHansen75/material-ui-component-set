import { Icon, option, prefab } from '@betty-blocks/component-sdk';
import { Row } from './structures/Row';
import { Column } from './structures/Column';
import { options } from './structures/Column/options';

const columnOptions = { ...options };
columnOptions.columnWidth = option('CUSTOM', {
  label: 'Column width',
  value: '4',
  configuration: {
    as: 'DROPDOWN',
    dataType: 'string',
    allowedInput: [
      { name: 'Fit content', value: 'fitContent' },
      { name: 'Flexible', value: 'flexible' },
      { name: 'Hidden', value: 'hidden' },
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
      { name: '11', value: '11' },
      { name: '12', value: '12' },
    ],
  },
});

columnOptions.columnWidthTabletLandscape = option('CUSTOM', {
  label: 'Column width (tablet landscape)',
  value: '4',
  configuration: {
    as: 'DROPDOWN',
    dataType: 'string',
    allowedInput: [
      { name: 'Fit content', value: 'fitContent' },
      { name: 'Flexible', value: 'flexible' },
      { name: 'Hidden', value: 'hidden' },
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
      { name: '11', value: '11' },
      { name: '12', value: '12' },
    ],
  },
});

columnOptions.columnWidthTabletPortrait = option('CUSTOM', {
  label: 'Column width (tablet portrait)',
  value: '12',
  configuration: {
    as: 'DROPDOWN',
    dataType: 'string',
    allowedInput: [
      { name: 'Fit content', value: 'fitContent' },
      { name: 'Flexible', value: 'flexible' },
      { name: 'Hidden', value: 'hidden' },
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
      { name: '11', value: '11' },
      { name: '12', value: '12' },
    ],
  },
});

columnOptions.columnWidthMobile = option('CUSTOM', {
  label: 'Column width (mobile)',
  value: '12',
  configuration: {
    as: 'DROPDOWN',
    dataType: 'string',
    allowedInput: [
      { name: 'Fit content', value: 'fitContent' },
      { name: 'Flexible', value: 'flexible' },
      { name: 'Hidden', value: 'hidden' },
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
      { name: '11', value: '11' },
      { name: '12', value: '12' },
    ],
  },
});

const attrs = {
  icon: Icon.Layout444Icon,
  category: 'LAYOUT',
  keywords: ['Layout', 'column', 'columns', '1'],
};
export default prefab('3 Columns', attrs, undefined, [
  Row({}, [
    Column({
      options: columnOptions,
    }),
    Column({ options: columnOptions }),
    Column({ options: columnOptions }),
  ]),
]);