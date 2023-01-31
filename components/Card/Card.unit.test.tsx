import { Card, type CardProps } from './Card'
import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'

const testTitle = 'Card Title'
const testDescription = 'Test description.'
const testimageUri = '/'
const testlinkUrl = '/'

describe('Card', () => {
  it('does not render with empty props', () => {
    render(<Card {...({} as CardProps)} />)
    expect(screen.queryByTestId('card')).not.toBeInTheDocument()
  })

  it('has correct classes', () => {
    render(
      <Card
        title={testTitle}
        description={testDescription}
        imageUri={testimageUri}
        linkUrl={testlinkUrl}
      />
    )

    const card = screen.getByTestId('card')
    expect(card).toHaveClass('card')
    fireEvent.mouseOver(card)
    expect(card).toHaveClass('card focused')

    fireEvent.mouseOut(card)
    expect(card).toHaveClass('card')
  })

  it('renders Card unchanged', () => {
    expect(
      renderer
        .create(
          <Card
            title={testTitle}
            description={testDescription}
            imageUri={testimageUri}
            linkUrl={testlinkUrl}
          />
        )
        .toJSON()
    ).toMatchSnapshot()
  })
})
