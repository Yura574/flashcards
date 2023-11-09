import { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

// @ts-ignore
const meta = {
  argTypes: {
    variant: {
      controls: ['radio'],
      options: ['primary', 'secondary', 'link', 'tertiary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Component/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary button',
    disabled: false,
    variant: 'tertiary',
  },
}

export const Link: Story = {
  args: {
    children: 'Link button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'FullWidth button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
