import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CustomLink from './CustomLink';

describe('test CustomLink', () => {
  const testLink = (
    <CustomLink href='/'>
      <div data-testid='childElement'>home</div>
    </CustomLink>
  );
  it('displays correctly', () => {
    render(testLink);
    const customLink = screen.getByText('home');
    expect(customLink).toBeInTheDocument();
    const childElement = screen.getByTestId('childElement');
    expect(customLink).toContainElement(childElement);
  });

  it('renders CustomLink unchanged', () => {
    const testLink = (
      <CustomLink href='/'>
        <div data-testid='childElement'></div>
      </CustomLink>
    );
    const tree = renderer.create(testLink).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
