import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./styles.ts";
import { Toggle } from "./Toggle";
export default {
  title: "Example/Toggle",

  component: Toggle,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  primary: true,
};
