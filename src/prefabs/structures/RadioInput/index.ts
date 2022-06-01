import {
  component,
  PrefabComponent,
  OptionProducer,
} from '@betty-blocks/component-sdk';
import { updateOption } from '../../../utils';
import { deleteActionVariable } from '../../hooks/deleteActionVariable';
import { options as defaults } from './options';

export interface Configuration {
  options?: Record<string, OptionProducer>;
  label?: string;
}

const $afterDelete = [deleteActionVariable];

export const RadioInput = (
  config: Configuration,
  children: PrefabComponent[] = [],
) => {
  const options = { ...(config.options || defaults) };

  if (config.label) {
    options.label = updateOption(options.label, { value: [config.label] });
  }

  return component('RadioInput', { options, $afterDelete }, children);
};
