import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Badge/Theme',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const WebLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WebLight.args = {
  input: 'WebLight',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const WebDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WebDark.args = {
  input: 'WebDark',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebDark'
};

export const TeamsLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeamsLight.args = {
  input: 'TeamsLight',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'TeamsLight'
};

export const TeamsDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeamsDark.args = {
  input: 'TeamsDark',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'TeamsDark'
};

export const TeamsHighContrast = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeamsHighContrast.args = {
  input: 'TeamsHighContrast',
  separator: undefined,
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'TeamsHighContrast'
};

 