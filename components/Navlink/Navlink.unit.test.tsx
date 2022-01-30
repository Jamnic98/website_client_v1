import Navlink from './Navlink';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

const testNavlinkObj = {
  label: 'logs',
  url: '/logs',
  children: [{ label: 'running', url: '/logs/running', children: [] }]
};

describe('Navlink', () => {
  global.innerWidth = 1200;
  global.dispatchEvent(new Event('resize'));

  const testNavlink = <Navlink navlinkObj={testNavlinkObj} />;
  it('renders Navlink', () => {
    render(testNavlink);
    const navlink = screen.getByText('logs');
    expect(navlink).toBeInTheDocument();
  });

  it('opens and closes dropdown onMouseOver and onMouseOut', () => {
    render(testNavlink);
    const navlink = screen.getByText('logs');
    const dropdown = screen.getByTestId('dropdown');
    const dropdownContainer = screen.getByTestId('dropdownContainer');

    expect(dropdown).toHaveClass('dropdown closed');
    fireEvent.mouseOver(navlink);
    expect(dropdown).toHaveClass('dropdown open');
    fireEvent.mouseOut(navlink);
    expect(dropdown).toHaveClass('dropdown closed');

    fireEvent.mouseOver(dropdownContainer);
    expect(dropdown).toHaveClass('dropdown open');
    fireEvent.mouseOut(dropdownContainer);
    expect(dropdown).toHaveClass('dropdown closed');
  });

  it('renders Navlink unchanged', () => {
    const tree = renderer
      .create(<Navlink navlinkObj={testNavlinkObj} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
