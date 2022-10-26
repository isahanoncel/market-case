import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from '.';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
