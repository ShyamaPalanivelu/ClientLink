import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./styles.tsx";
import { GainLoserTable } from "./GainLoserTable";
export default {
  title: "Example/GainLoserTable",

  component: GainLoserTable,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GainLoserTable>;

const Template: ComponentStory<typeof GainLoserTable> = (args) => (
  <GainLoserTable {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

