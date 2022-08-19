import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Badge/Size',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  input: 'small',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'small',
  theme: 'WebLight',
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  input: 'medium',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  input: 'large',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'large',
  theme: 'WebLight',
};

export const ExtraLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExtraLarge.args = {
  input: 'extra-large',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'extra-large',
  theme: 'WebLight',
};




 