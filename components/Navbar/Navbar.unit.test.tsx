import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { Navbar } from './Navbar'
import { navlinkObjArr } from '../../utils'

// TODO: remove
/* const testNavlinkObjArr = [
  {
    label: 'logs',
    url: '/logs/running',
    children: [
      { label: 'running', url: '/logs/running', children: [] }
      // { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      // { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      // { label: 'reading', url: '/logs/reading', children: [] }
    ]
  },
  { label: 'projects', url: '/projects', children: [] },
  { label: 'about ', url: '/about', children: [] }
]

const getNavbar = (props?: NavbarProps) => (
  <Navbar navlinkObjArr={testNavlinkObjArr} />
) */

describe('Navbar', () => {
	it('renders a Navbar', () => {
		render(<Navbar navlinkObjArr={navlinkObjArr} />)
		const navbar = screen.getByTestId('application-navbar')
		expect(navbar).toBeInTheDocument()
	})

	it('renders Navbar unchanged', () =>
		expect(
			renderer.create(<Navbar navlinkObjArr={navlinkObjArr} />).toJSON()
		).toMatchSnapshot())
})
