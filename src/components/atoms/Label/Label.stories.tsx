import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>Getir</Label>
);
