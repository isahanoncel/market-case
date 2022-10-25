import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterBox from '.';

export default {
  title: 'Molecules/FilterBox',
  component: FilterBox,
  args: {
    title: 'Brands',
    items: [
      { key: 'key1', value: 'value 1' },
      { key: 'key2', value: 'value 2' },
    ],
  },
} as ComponentMeta<typeof FilterBox>;

export const Default: ComponentStory<typeof FilterBox> = (args) => (
  <FilterBox {...args} />
);
