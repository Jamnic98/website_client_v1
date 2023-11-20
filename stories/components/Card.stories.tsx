import type { Meta, StoryObj } from '@storybook/react'

import { Card } from 'components'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card,
	args: {
		title: 'Card Title',
		description: 'Card Description',
		imageURI: undefined,
		linkURL: '/',
	},
}
export default meta

type Story = StoryObj<typeof Card>
export const CardStory: Story = {}
