import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Basket from '.';
import store from '../../../store';

export default {
  title: 'Molecules/Basket',
  component: Basket,
} as ComponentMeta<typeof Basket>;

export const Default: ComponentStory<typeof Basket> = (args) => (
  <Provider store={store}>
    <Basket {...args} />
  </Provider>
);
