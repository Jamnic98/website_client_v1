import Dropdown from './Dropdown';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

type testObject = { letter: string };
const testArray: testObject[] = [
  { letter: 'a' },
  { letter: 'b' },
  { letter: 'c' }
];

describe('Dropdown', () => {
  render(
    <Dropdown
      isOpen={false}
      items={testArray}
      render={(item: testObject) => (
        <div data-testid='dropdownItem'>{item.letter}</div>
      )}
    />
  );
  const dropdown = screen.getByTestId('dropdown');
  it('renders Dropdown', () => {
    expect(dropdown).toBeInTheDocument();
    const dropdownItem = screen.getAllByTestId('dropdownItem')[0];
    expect(dropdown).toContainElement(dropdownItem);
    expect(dropdownItem).toHaveTextContent(testArray[0].letter);
  });

  it('renders Dropdown unchanged', () => {
    const tree = renderer
      .create(
        <Dropdown isOpen={false} items={testArray} render={() => <div></div>} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
