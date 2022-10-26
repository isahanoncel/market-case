import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductListingTable from '.';

export default {
  title: 'Molecules/ProductListingTable',
  component: ProductListingTable,
} as ComponentMeta<typeof ProductListingTable>;

export const Default: ComponentStory<typeof ProductListingTable> = (args) => (
  <ProductListingTable {...args} />
);
