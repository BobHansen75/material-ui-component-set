import {
  Icon,
  PrefabInteraction,
  wrapper,
  ThemeColor,
  color,
  size,
  font,
  variable,
  sizes,
  option,
  linked,
  prefab,
  component,
  toggle,
  property,
  displayLogic,
} from '@betty-blocks/component-sdk';
import { Box, boxOptions, Text as TextPrefab, textOptions } from './structures';
import { options as formOptions } from './structures/ActionJSForm/options';
import { CheckboxInput } from './structures/CheckboxInput';
import { checkboxInputOptions } from './structures/CheckboxInput/options';

const interactions: PrefabInteraction[] = [];

const attributes = {
  category: 'WIDGETS',
  icon: Icon.CheckboxIcon,
  interactions,
  variables: [],
};

export default prefab('Checkbox question', attributes, undefined, [
  wrapper(
    {
      label: 'Checkbox question',
      optionCategories: [],
      options: {
        property: linked({
          label: 'Question',
          value: {
            ref: {
              componentId: '#CheckboxInput',
              optionId: '#questionProperty',
            },
          },
          configuration: {
            showOnDrop: true,
          },
          optionRef: {
            id: '#questionProperty',
          },
        }),
        questionContent: linked({
          label: 'Checkbox label',
          value: {
            ref: {
              componentId: '#CheckboxInput',
              optionId: '#questionLabel',
            },
          },
          configuration: {
            showOnDrop: true,
          },
        }),
        required: linked({
          label: 'Required to answer',
          value: {
            ref: {
              componentId: '#CheckboxInput',
              optionId: '#questionRequired',
            },
          },
        }),
        questionSpacing: linked({
          label: 'Question spacing',
          value: {
            ref: {
              componentId: '#questionBox',
              optionId: '#questionBoxOuterSpacing',
            },
          },
        }),
        displayLogic: linked({
          label: 'Display logic',
          value: {
            ref: {
              componentId: '#questionBox',
              optionId: '#questionBoxDisplayLogic',
            },
          },
        }),
      },
    },
    [
      Box(
        {
          ref: {
            id: '#questionBox',
          },
          options: {
            ...boxOptions,
            backgroundColor: color('Background color', {
              value: ThemeColor.WHITE,
            }),
            borderColor: color('Border color', {
              value: ThemeColor.MEDIUM,
            }),
            borderWidth: size('Border thickness', {
              value: '1px',
              configuration: {
                as: 'UNIT',
              },
            }),
            borderRadius: size('Border radius', {
              value: '5px',
              configuration: {
                as: 'UNIT',
              },
            }),
            outerSpacing: sizes('Outer space', {
              value: ['0rem', '0rem', 'M', '0rem'],
              ref: {
                id: '#questionBoxOuterSpacing',
              },
            }),
            displayLogic: displayLogic('Display logic', {
              value: {},
              ref: {
                id: '#questionBoxDisplayLogic',
              },
            }),
          },
        },
        [
          component(
            'Form',
            {
              ref: { id: '#CheckboxWidgetForm' },
              options: { ...formOptions },
            },
            [
              TextPrefab(
                {
                  options: {
                    ...textOptions,
                    content: variable('Content', {
                      value: [''],
                      configuration: {
                        as: 'MULTILINE',
                      },
                    }),
                    type: font('Font', { value: ['Body1'] }),
                    outerSpacing: sizes('Outer space', {
                      value: ['0rem', '0rem', 'S', '0rem'],
                    }),
                    fontWeight: option('CUSTOM', {
                      label: 'Font weight',
                      value: '500',
                      configuration: {
                        as: 'DROPDOWN',
                        dataType: 'string',
                        allowedInput: [
                          { name: '100', value: '100' },
                          { name: '200', value: '200' },
                          { name: '300', value: '300' },
                          { name: '400', value: '400' },
                          { name: '500', value: '500' },
                          { name: '600', value: '600' },
                          { name: '700', value: '700' },
                          { name: '800', value: '800' },
                          { name: '900', value: '900' },
                        ],
                      },
                    }),
                  },
                },
                [],
              ),
              CheckboxInput(
                {
                  ref: { id: '#CheckboxInput' },
                  options: {
                    ...checkboxInputOptions,
                    property: property('Question', {
                      value: '',
                      configuration: {
                        allowedKinds: ['BOOLEAN', 'BOOLEAN_EXPRESSION'],
                        createProperty: {
                          type: 'BOOLEAN',
                        },
                      },
                      ref: {
                        id: '#questionProperty',
                      },
                    }),
                    label: variable('Label', {
                      value: [''],
                      ref: {
                        id: '#questionLabel',
                      },
                      optionRef: {
                        sourceId: '#questionProperty',
                        inherit: 'label',
                      },
                    }),
                    required: toggle('Required', {
                      ref: {
                        id: '#questionRequired',
                      },
                    }),
                  },
                },
                [],
              ),
            ],
          ),
        ],
      ),
    ],
  ),
]);
