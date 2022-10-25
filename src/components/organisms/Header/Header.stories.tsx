import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Header from '.';
import store from '../../../store';

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => (
  <Provider store={store}>
    <Header {...args} />
  </Provider>
);
