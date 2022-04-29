import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from './Icon';

export default {
  title: "Components/Icon",
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Bell = Template.bind({});
Bell.args = {
  icon: require("./New Bell.png")
};

export const ProfIcon = Template.bind({})
ProfIcon.args = {
  icon: require('./Proficon.png')
}
export const AdvisorIcon = Template.bind({})
AdvisorIcon.args = {
  icon: require('../../assets/advisor.png')
}

export const ChevronRightLogo = Template.bind({})
ChevronRightLogo.args = {
  icon: require('../../assets/chevron_right.png')
}
export const MailLogo = Template.bind({})
MailLogo.args = {
  icon: require('../../assets/MailImg1.png')
}
export const ChevronTopLogo = Template.bind({})
ChevronTopLogo.args = {
  icon: require('../../assets/chevrontop.png')
}

