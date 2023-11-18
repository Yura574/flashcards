import buttonBack from '@/assets/svg/button-back.svg'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

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
export const PrimaryWithIcon: Story = {
  args: {
    children: `Primary button`,
    disabled: false,
    icon: buttonBack,
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
export const SecondaryWithIcon: Story = {
  args: {
    children: 'Secondary button',
    disabled: false,
    icon: buttonBack,
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

// @ts-ignore
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'As Link',
    fullWidth: false,
    name: 'this is link',
    variant: 'link',
  },
}
