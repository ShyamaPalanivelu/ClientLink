import Divider from "./Divider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const HorizontalSmall = Template.bind({})
HorizontalSmall.args = {
  borderColor: "#f0f2f5",
  horizontal: true,
  borderHeight: "0.0625rem"
}