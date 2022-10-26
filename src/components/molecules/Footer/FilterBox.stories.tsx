import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Molecules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);
