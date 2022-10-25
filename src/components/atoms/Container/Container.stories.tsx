import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from '.';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>Container</Container>
);
