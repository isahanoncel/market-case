import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Filters from '.';
import store from '../../../store';
import Sorting from '../../molecules/Sorting';

export default {
  title: 'Organisms/Filters',
  component: Filters,
} as ComponentMeta<typeof Filters>;

export const Default: ComponentStory<typeof Filters> = () => (
  <Provider store={store}>
    <Sorting />
  </Provider>
);
