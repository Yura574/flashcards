import { Input } from '@/components/ui/input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: ['radio'],
      options: ['default', 'password', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Component/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj
export const DefaultStory: Story = {
  args: {
    children: 'Default input',
    variant: 'default',
  },
}
