import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FluentUIBadgeApp from '../FluentUIBadge/FluentUIBadgeApp';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FluentUI Badge/Separator',
  component: FluentUIBadgeApp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FluentUIBadgeApp>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FluentUIBadgeApp> = (args) => <FluentUIBadgeApp {...args} />;

export const SpaceSeparated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SpaceSeparated.args = {
  input: 'This is a separated badge',
  separator: ' ',
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const CommaSeparated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommaSeparated.args = {
  input: 'This,is,a,comma,separated,badge',
  separator: ',',
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};

export const SemicolonSeparated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SemicolonSeparated.args = {
  input: 'This;is;a;semicolon;separated;badge',
  separator: ';',
  appearance: 'filled',
  shape: 'circular',
  color: 'brand',
  size: 'medium',
  theme: 'WebLight',
};




 