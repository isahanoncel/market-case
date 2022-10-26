import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import FilterBox from '.';
import store from '../../../store';

export default {
  title: 'Molecules/FilterBox',
  component: FilterBox,
  args: {
    title: 'Brands',
    items: [
      { key: 'Brand 1', value: 'value 1' },
      { key: 'Brand 2', value: 'value 2' },
      { key: 'Brand 3', value: 'value 3' },
      { key: 'Brand 4', value: 'value 4' },
    ],
  },
} as ComponentMeta<typeof FilterBox>;

export const Default: ComponentStory<typeof FilterBox> = (args) => (
  <Provider store={store}>
    <FilterBox {...args} />
  </Provider>
);
