import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FluentUI Badge/Appearance',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  input: 'filled',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Ghost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ghost.args = {
  input: 'ghost',
  separator: undefined,
  appearance: 'ghost',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  input: 'outline',
  separator: undefined,
  appearance: 'outline',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Tint = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tint.args = {
  input: 'tint',
  separator: undefined,
  appearance: 'tint',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};


 