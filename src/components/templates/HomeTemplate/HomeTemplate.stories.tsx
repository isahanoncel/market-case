import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import HomeTemplate from '.';
import store from '../../../store';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

export const Default: ComponentStory<typeof HomeTemplate> = () => (
  <Provider store={store}>
    <HomeTemplate />
  </Provider>
);
