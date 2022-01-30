import Navbar from './Navbar';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import navlinkObjArr from '../../data/navlinkObjArr';

describe('Navbar', () => {
  it('renders a Navbar', () => {
    render(<Navbar navlinkObjArr={navlinkObjArr} />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  it('renders navbar unchanged', () => {
    const tree = renderer
      .create(<Navbar navlinkObjArr={navlinkObjArr} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
