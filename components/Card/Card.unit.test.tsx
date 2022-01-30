import Card from './Card';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

const cardObj = {
  title: 'Card',
  description: 'Test card',
  imageURI: '/',
  URI: '/'
};

describe('Card', () => {
  it('has correct classes', () => {
    render(<Card cardObj={cardObj} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card');
    fireEvent.mouseOver(card);
    expect(card).toHaveClass('card focused');
    fireEvent.mouseOut(card);
    expect(card).toHaveClass('card');
  });
});
