import { Input } from '@/components/ui/input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: {
      control: ['radio'],
      defaultValue: false,
    },
    error: {
      defaultValue: '',
    },
    label: {
      defaultValue: '',
    },
    variant: {
      controls: ['radio'],
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
    disabled: true,
    label: 'input',
    variant: 'default',
  },
}
export const DefaultInputWithError: Story = {
  args: {
    error: 'error',
    label: 'input',
    variant: 'default',
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'input',
    variant: 'password',
  },
}
export const PasswordInputWithError: Story = {
  args: {
    error: 'Some error',
    label: 'input',
    variant: 'password',
  },
}

export const SearchInput: Story = {
  args: {
    label: 'input',
    variant: 'search',
  },
}
