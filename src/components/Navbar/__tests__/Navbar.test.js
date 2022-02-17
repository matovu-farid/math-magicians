import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('navbar tests', () => {
  const MockNavBar = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  it('renders correctly', () => {
    const tree = renderer.create(<MockNavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should display correct value', () => {
    render(<MockNavBar />);
    const links = screen.queryAllByRole('link');

    expect(links.length).toBe(3);
  });

  it('home link should have an active class on innitial page load', () => {
    render(<MockNavBar />);
    const homeLink = screen.queryByRole('link', { name: 'Home' });
    expect(homeLink).toHaveClass('active');
  });
  it('calculator link should not have an active class on innital page load', () => {
    render(<MockNavBar />);
    const homeLink = screen.queryByRole('link', { name: /calculator/i });
    expect(homeLink).not.toHaveClass('active');
  });
  it('calculator link should have an active class when clicked', () => {
    render(<MockNavBar />);
    const homeLink = screen.queryByRole('link', { name: /calculator/i });
    userEvent.click(homeLink);
    expect(homeLink).toHaveClass('active');
  });
});
