import { PageHeader } from './PageHeader'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

const testTitle = 'Title'
const testDescription = 'This is a test.'

describe('Header', () => {
  it('renders correctly', () => {
    render(<PageHeader title={testTitle} description={testDescription} />)
    const header = screen.getByTestId('application-page-header')
    expect(header.getElementsByTagName('h1')[0]).toHaveTextContent(testTitle)
    expect(header.getElementsByTagName('p')[0]).toHaveTextContent(
      testDescription
    )
  })

  it('renders Header unchanged', () => {
    const tree = renderer
      .create(<PageHeader title={testTitle} description={testDescription} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
