import { render, screen } from '@testing-library/react';
import Caret from './Caret';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

describe('test Caret', () => {
  it('displays correctly', () => {
    const testCaret = <Caret isFlipped={false} />;
    render(testCaret);
    const caret = screen.getByText('^');
    expect(caret).toBeInTheDocument();
  });

  it('rotates 180 degrees when isFlipped = true', () => {
    const testCaret = <Caret isFlipped={false} />;
    const { rerender } = render(testCaret);
    const caret = screen.getByText('^');
    rerender(<Caret isFlipped={true} />);
    expect(caret).toHaveClass('flip');
  });

  it('renders Caret unchanged', () => {
    const testCaret = <Caret isFlipped={false} />;
    const tree = renderer.create(testCaret).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
