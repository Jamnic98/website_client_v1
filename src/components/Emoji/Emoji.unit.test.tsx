import { render, screen } from '@testing-library/react'

import { Emoji } from './Emoji'

test('displays correct emoji', () => {
  render(<Emoji symbol="👋" />)
  const emoji = screen.getByTestId('application-emoji')
  expect(emoji).toBeInTheDocument()
  expect(emoji).toHaveTextContent('👋')
})
