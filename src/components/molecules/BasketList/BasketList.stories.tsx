import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import BasketList from '.';
import store from '../../../store';

export default {
  title: 'Molecules/BasketList',
  component: BasketList,
} as ComponentMeta<typeof BasketList>;

export const Default: ComponentStory<typeof BasketList> = (args) => (
  <Provider store={store}>
    <BasketList {...args} />
  </Provider>
);
