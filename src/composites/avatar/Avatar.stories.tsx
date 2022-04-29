import { ComponentStory, ComponentMeta } from '@storybook/react'
import './styles.tsx'
import { Avatar } from './Avatar'

export default {
  title: 'Composites/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: "Name FirstName"
}
