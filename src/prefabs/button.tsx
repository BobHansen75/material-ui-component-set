import { Icon, prefab } from '@betty-blocks/component-sdk';
import { Button } from './structures/Button';

const attr = {
  icon: Icon.ButtonIcon,
  category: 'BUTTON',
  keywords: ['Button'],
};

export default prefab('Button', attr, undefined, [Button({}, [])]);