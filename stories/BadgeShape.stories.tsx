import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Badge/Shape',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const Circular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Circular.args = {
  input: 'filled',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  input: 'rounded',
  separator: undefined,
  appearance: 'filled',
  shape: 'rounded',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Square = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Square.args = {
  input: 'square',
  separator: undefined,
  appearance: 'filled',
  shape: 'square',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};


 