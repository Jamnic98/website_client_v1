import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

import { Dropdown } from '.'

type testObject = { letter: string }
const testArray: testObject[] = [
	{ letter: 'a' },
	{ letter: 'b' },
	{ letter: 'c' },
]

describe('Dropdown', () => {
	render(
		<Dropdown
			isOpen={false}
			items={testArray}
			render={(item: testObject) => (
				<div data-testid="dropdownItem">{item.letter}</div>
			)}
		/>
	)
	const dropdown = screen.getByTestId('dropdown')
	it('renders Dropdown', () => {
		expect(dropdown).toBeInTheDocument()
		const dropdownItem = screen.getAllByTestId('dropdownItem')[0]
		expect(dropdown).toContainElement(dropdownItem)
		expect(dropdownItem).toHaveTextContent(testArray[0].letter)
	})

	it('renders Dropdown unchanged', () => {
		expect(
			renderer
				.create(
					<Dropdown
						isOpen={false}
						items={testArray}
						render={() => <div></div>}
					/>
				)
				.toJSON()
		).toMatchSnapshot()
	})
})
