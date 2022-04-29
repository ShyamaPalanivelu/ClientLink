import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./styles.tsx";
import { GainLoserHead } from "./GainLoserHead";
export default {
  title: "Example/GainLoserHead",

  component: GainLoserHead,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GainLoserHead>;

const Template: ComponentStory<typeof GainLoserHead> = (args) => (
  <GainLoserHead {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};
