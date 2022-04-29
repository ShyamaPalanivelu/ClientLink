import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  logo: require('../../assets/icons/16px/Wedbushlogo.png')
}
