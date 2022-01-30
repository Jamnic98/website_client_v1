import Header from './PageHeader';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { headerObj } from '../../types/global';

const testHeaderObj: headerObj = {
  title: 'Title',
  description: 'This is a test.'
};

describe('Header', () => {
  it('renders correctly', () => {
    const { title, description } = testHeaderObj;
    render(<Header headerObj={testHeaderObj} />);
    const header = screen.getByTestId('header');
    expect(header).toHaveTextContent(`${title}${description}`);
  });
  
  
  it('renders Header unchanged', () => {
    const tree = renderer
      .create(
        <Header headerObj={testHeaderObj} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
