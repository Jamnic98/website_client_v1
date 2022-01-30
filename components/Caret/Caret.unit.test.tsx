import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Caret from './Caret';

describe('test Caret', () => {
  it('displays correctly', () => {
    const testCaret = <Caret isUp={false} />;
    render(testCaret);
    const caret = screen.getByText('^');
    expect(caret).toBeInTheDocument();
  });

  it('rotates 180 degrees when isUp = true', () => {
    const testCaret = <Caret isUp={false} />;
    const { rerender } = render(testCaret);
    const caret = screen.getByText('^');
    rerender(<Caret isUp={true} />);
    expect(caret).toHaveClass('flip');
  });

  it('renders Caret unchanged', () => {
    const testCaret = <Caret isUp={false} />;
    const tree = renderer.create(testCaret).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
