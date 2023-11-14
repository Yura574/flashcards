import { Input } from '@/components/ui/input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    error: {
      defaultValue: '',
    },
    label: {
      defaultValue: '',
    },
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

type Story = StoryObj<typeof meta>
export const DefaultInput: Story = {
  args: {
    children: 'Default input',
    label: 'input',
    variant: 'default',
  },
}
export const DefaultInputWithError: Story = {
  args: {
    children: 'Default input',
    error: 'error',
    label: 'input',
    variant: 'default',
  },
}

export const PasswordInput: Story = {
  args: {
    children: 'Password input',
    label: 'input',
    variant: 'password',
  },
}

export const SearchInput: Story = {
  args: {
    children: 'Search input',
    label: 'input',
    variant: 'search',
  },
}
