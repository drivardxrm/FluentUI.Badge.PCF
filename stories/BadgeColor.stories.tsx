import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Badge/Color',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const Brand = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Brand.args = {
  input: 'brand',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  input: 'danger',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'danger',
  size: 'medium',
  theme: 'WebLight',
};

export const Important = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Important.args = {
  input: 'important',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'important',
  size: 'medium',
  theme: 'WebLight',
};

export const Informative = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Informative.args = {
  input: 'informative',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'informative',
  size: 'medium',
  theme: 'WebLight',
};

export const Severe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Severe.args = {
  input: 'severe',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'severe',
  size: 'medium',
  theme: 'WebLight',
};

export const Subtle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subtle.args = {
  input: 'subtle',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'subtle',
  size: 'medium',
  theme: 'WebLight',
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  input: 'success',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'success',
  size: 'medium',
  theme: 'WebLight',
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  input: 'warning',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'warning',
  size: 'medium',
  theme: 'WebLight',
};









 