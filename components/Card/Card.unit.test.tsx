import Card from './Card';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Card', () => {
  it('has correct classes', () => {
    const testObj = {
      title: 'Card',
      description: 'Test card',
      imageURI: '/',
      linkURL: '/',
    };
    render(<Card cardObj={testObj} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card');

    fireEvent.mouseOver(card);
    expect(card).toHaveClass('card focused');

    fireEvent.mouseOut(card);
    expect(card).toHaveClass('card');
  });
});
