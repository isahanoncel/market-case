import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '.';

export default {
  title: 'Atoms/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ArrowLeft = Default.bind({});
ArrowLeft.args = {
  name: 'ArrowLeft',
};
 