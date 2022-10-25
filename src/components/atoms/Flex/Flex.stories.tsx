import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Flex from '.';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>Flex</Flex>
);
