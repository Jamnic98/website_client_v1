import type { Meta, StoryObj } from '@storybook/react'

import { Card } from 'components'
import imageFile from 'public/images/profile-picture.jpg'

const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card,
	args: {
		title: 'Card Title',
		description: 'Card Description',
		imageURI: imageFile.src,
		linkURL: '/',
	},
}
export default meta

type Story = StoryObj<typeof Card>
export const CardStory: Story = {}
