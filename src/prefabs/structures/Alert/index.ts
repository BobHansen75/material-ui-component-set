import {
  color,
  component,
  OptionProducer,
  PrefabComponent,
  PrefabReference,
  ThemeColor,
  toggle,
} from '@betty-blocks/component-sdk';

import { options as defaults } from './options';

export interface Configuration {
  options?: Record<string, OptionProducer>;
  ref?: PrefabComponent['ref'];
}

export const Alert = (config: Configuration): PrefabReference => {
  const options = { ...defaults, ...config.options };
  const ref = config.ref ? { ref: config.ref } : {};

  return component('Alert', { ...ref, options }, []);
};

export const FormSuccessAlert = (config: Configuration): PrefabReference => {
  const successAlertOptions = {
    visible: toggle('Toggle visibility', {
      value: false,
      configuration: { as: 'VISIBILITY' },
    }),
    allowTitleServerResponse: toggle(
      'Allow to overwrite by the server response',
      { value: true },
    ),
    allowTextServerResponse: toggle(
      'Allow to overwrite by the server response',
      { value: true },
    ),
  };

  return Alert({
    ...config,
    options: { ...successAlertOptions, ...config.options },
  });
};

export const FormErrorAlert = (config: Configuration): PrefabReference => {
  const errorAlertOptions = {
    visible: toggle('Toggle visibility', {
      value: false,
      configuration: { as: 'VISIBILITY' },
    }),
    allowTitleServerResponse: toggle(
      'Allow to overwrite by the server response',
      { value: true },
    ),
    allowTextServerResponse: toggle(
      'Allow to overwrite by the server response',
      { value: true },
    ),
    background: color('Background color', { value: ThemeColor.DANGER }),
  };

  return Alert({
    ...config,
    options: { ...errorAlertOptions, ...config.options },
  });
};
