import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

import { Dropdown } from './Dropdown'

type testObject = { letter: string }
const testArray: testObject[] = [
  { letter: 'a' },
  { letter: 'b' },
  { letter: 'c' },
]

describe('Dropdown', () => {
  // draw Dropdown component
  render(
    <Dropdown
      isOpen={false}
      items={testArray}
      render={(item: testObject) => (
        <div data-testid="dropdown-item">{item.letter}</div>
      )}
    />
  )

  const dropdown = screen.getByTestId('application-dropdown')

  it('renders Dropdown', () => {
    expect(dropdown).toBeInTheDocument()
    const dropdownItem = screen.getAllByTestId('dropdown-item')[0]
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
