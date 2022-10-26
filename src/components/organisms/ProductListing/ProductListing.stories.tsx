import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import ProductListing from '.';
import store from '../../../store';

export default {
  title: 'Organisms/ProductListing',
  component: ProductListing,
} as ComponentMeta<typeof ProductListing>;

export const Default: ComponentStory<typeof ProductListing> = () => (
  <Provider store={store}>
    <ProductListing />
  </Provider>
);
