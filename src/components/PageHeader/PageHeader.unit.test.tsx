import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'

import { PageHeader } from './PageHeader'

const testTitle = 'Title'
const testDescription = 'This is a test.'

describe('test PageHeader component', () => {
  it('renders correctly', () => {
    render(<PageHeader title={testTitle} description={testDescription} />)
    const header = screen.getByTestId('application-pageHeader')
    expect(header.getElementsByTagName('h1')[0]).toHaveTextContent(testTitle)
    expect(header.getElementsByTagName('p')[0]).toHaveTextContent(
      testDescription
    )
  })

  it('renders PageHeader unchanged', () => {
    const tree = renderer
      .create(<PageHeader title={testTitle} description={testDescription} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
