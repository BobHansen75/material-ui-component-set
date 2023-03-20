import {
  prefab,
  Icon,
  PrefabInteraction,
  wrapper,
  variable,
  linked,
  component as makeComponent,
  property,
} from '@betty-blocks/component-sdk';
import { options as formOptions } from './structures/ActionJSForm/options';
import {
  Box,
  Text as TextComp,
  TextInput,
  textOptions,
  textInputOptions,
} from './structures';

const interactions: PrefabInteraction[] = [];

const attributes = {
  category: 'TEST EDGE',
  icon: Icon.TextInputIcon,
  interactions,
  variables: [],
};

export default prefab('Simple text widget', attributes, undefined, [
  wrapper(
    {
      label: 'Simple text widget',
      optionCategories: [],
      options: {
        question: linked({
          label: 'Question',
          value: {
            ref: {
              componentId: '#textInput',
              optionId: '#property',
            },
          },
          optionRef: {
            id: '#question',
          },
          configuration: {
            showOnDrop: true,
          },
        }),
      },
    },
    [
      Box({}, [
        makeComponent(
          'Form',
          {
            ref: { id: '#allOptionsWidgetForm' },
            options: { ...formOptions },
          },
          [
            TextComp(
              {
                ref: { id: '#questionText' },
                options: {
                  ...textOptions,
                  content: variable('Content', {
                    ref: { id: '#textContent' },
                    value: [],
                    configuration: { as: 'MULTILINE' },
                    optionRef: {
                      sourceId: '#question',
                      inherit: 'label',
                    },
                  }),
                },
              },
              [],
            ),
            TextInput(
              {
                label: 'Text field',
                ref: { id: '#textInput' },
                options: {
                  ...textInputOptions,
                  property: property('property', {
                    value: '',
                    ref: { id: '#property' },
                    configuration: {
                      createProperty: {
                        type: 'string',
                      },
                    },
                  }),
                  label: variable('Label', {
                    value: [''],
                    optionRef: {
                      sourceId: '#question',
                      inherit: 'label',
                    },
                  }),
                  value: variable('Value', {
                    value: [''],
                    optionRef: {
                      sourceId: '#question',
                      inherit: 'name',
                    },
                  }),
                },
              },
              [],
            ),
          ],
        ),
      ]),
    ],
  ),
]);
