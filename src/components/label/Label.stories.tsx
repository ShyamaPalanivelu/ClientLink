import Label from './Label'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Heading = Template.bind({})
Heading.args = {
  fontFamily: 'SourceSansProBold',
  fontSize: '64px',
  fontStyle: "regular",
  fontWeight: 700,
  lineHeight: "40px",
  color: "red",
  label: "Hello"
}