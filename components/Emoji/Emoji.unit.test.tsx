import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Emoji from './Emoji';

test('displays correct emoji', () => {
  render(<Emoji symbol='👋' />);
  const emoji = screen.getByTestId('emoji');
  expect(emoji).toBeInTheDocument();
  expect(emoji).toHaveTextContent('👋');
});
