import React from 'react'
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer'
import {Caret, type CaretProps} from '.'

const testIsFlipped = false

const getTestCaret = (props?: CaretProps) => {
	const finalProps = {
		isFlipped: testIsFlipped,
		...props,
	}
	return <Caret {...finalProps} />
}

const drawTestCaret = (props?: CaretProps) => {
	return render(getTestCaret(props))
}

describe('test Caret', () => {
	it('displays correctly', () => {
		drawTestCaret()
		const caret = screen.getByText('^')
		expect(caret).toBeInTheDocument()
	})

	it('rotates 180 degrees when isFlipped = true', () => {
		const {rerender} = drawTestCaret()
		const caret = screen.getByText('^')
		rerender(getTestCaret({isFlipped: true}))
		expect(caret).toHaveClass('flip')
	})

	it('renders Caret unchanged', () =>
		expect(renderer.create(getTestCaret()).toJSON()).toMatchSnapshot())
})
