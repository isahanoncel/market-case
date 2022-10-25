import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sorting from '.';

export default {
  title: 'Molecules/Sorting',
  component: Sorting,
} as ComponentMeta<typeof Sorting>;

export const Default: ComponentStory<typeof Sorting> = (args) => (
  <Sorting {...args} />
);
