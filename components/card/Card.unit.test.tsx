import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react'

import { Card, type CardProps } from './Card'

const testTitle = 'Card Title'
const testDescription = 'Test description.'
const testimageURI = '/'
const testLinkURL = '/'

const getTestCard = (props?: CardProps) => (
	<Card
		{...{
			title: testTitle,
			description: testDescription,
			imageURI: testimageURI,
			linkURL: testLinkURL,
			...props,
		}}
	/>
)

const drawCard = (props?: CardProps) => {
	render(getTestCard(props))
}

describe('Card', () => {
	it('renders correctly', () => {
		drawCard({ ...({} as CardProps) })
		expect(screen.getByText(testTitle)).toBeInTheDocument()
		expect(screen.getByText(testTitle)).toBeInTheDocument()
	})

	it('has correct classes', () => {
		drawCard()
		const card = screen.getByRole('link')
		expect(card).toHaveClass('card')

		fireEvent.mouseOver(card)
		expect(card).toHaveClass('card focused')

		fireEvent.mouseOut(card)
		expect(card).toHaveClass('card')
	})

	it('renders Card unchanged', () =>
		expect(renderer.create(getTestCard()).toJSON()).toMatchSnapshot())
})
