import { ComponentStory, ComponentMeta } from "@storybook/react";
import SmallWidget from "./SmallWidget";
export default {
  title: "composites/SmallWidget",
  component: SmallWidget,
} as ComponentMeta<typeof SmallWidget>;
const Template: ComponentStory<typeof SmallWidget> = (args) => (
  <SmallWidget {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  label: "Contact",
  color: "green",
};
