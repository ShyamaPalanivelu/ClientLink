import { Textbox } from './Textbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Textbox',
  Component: Textbox,
} as ComponentMeta<typeof Textbox>

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />

export const Regular = Template.bind({})
Regular.args = {
  placeholder: 'Hello',
}
