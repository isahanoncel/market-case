import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
