import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Sorting from '.';
import store from '../../../store';

export default {
  title: 'Molecules/Sorting',
  component: Sorting,
} as ComponentMeta<typeof Sorting>;

export const Default: ComponentStory<typeof Sorting> = (args) => (
  <Provider store={store}>
    <Sorting {...args} />
  </Provider>
);
