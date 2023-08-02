import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button.async'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: '12312'
	},
}

export const Secondary: Story = {
	args: {
		children: 'aSDASD'
	},
}

