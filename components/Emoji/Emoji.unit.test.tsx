import { render, screen } from '@testing-library/react'

import { Emoji } from 'components'

test('displays correct emoji', () => {
	render(<Emoji symbol="👋" />)
	const emoji = screen.getByTestId('application-emoji')
	expect(emoji).toBeInTheDocument()
	expect(emoji).toHaveTextContent('👋')
})
