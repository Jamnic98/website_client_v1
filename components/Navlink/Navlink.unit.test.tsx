import { Navlink } from '.'
import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { NavlinkData } from '../../types/global'

const mockOnClick = jest.fn()

const testNavlinkObj: NavlinkData = {
  label: 'logs',
  url: '/logs',
  children: [{ label: 'running', url: '/logs/running', children: [] }]
}

describe('Navlink', () => {
  beforeAll(() => {
    global.innerWidth = 1200
    global.dispatchEvent(new Event('resize'))
  })

  it('renders Navlink', () => {
    const testNavlink = (
      <Navlink navlinkObj={testNavlinkObj} onClick={mockOnClick}>
        test child
      </Navlink>
    )

    render(testNavlink)
    const navlink = screen.getByText('logs')
    expect(navlink).toBeInTheDocument()
  })

  it('opens and closes dropdown onMouseOver and onMouseOut', () => {
    const testNavlink = (
      <Navlink navlinkObj={testNavlinkObj} onClick={mockOnClick}>
        <div>test children</div>
      </Navlink>
    )

    render(testNavlink)
    const navlink = screen.getByText('logs')
    const dropdown = screen.getByTestId('dropdown')
    const dropdownContainer = screen.getByTestId('dropdownContainer')

    expect(dropdown).toHaveClass('dropdown closed')
    fireEvent.mouseOver(navlink)
    expect(dropdown).toHaveClass('dropdown open')
    fireEvent.mouseOut(navlink)
    expect(dropdown).toHaveClass('dropdown closed')

    fireEvent.mouseOver(dropdownContainer)
    expect(dropdown).toHaveClass('dropdown open')
    fireEvent.mouseOut(dropdownContainer)
    expect(dropdown).toHaveClass('dropdown closed')
  })

  it('renders Navlink unchanged', () => {
    const tree = renderer
      .create(<Navlink navlinkObj={testNavlinkObj} onClick={mockOnClick} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
