import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('navbar tests', () => {
  const MockNavBar = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  it('should display correct value', () => {
    render(<MockNavBar />);
    const links = screen.queryAllByRole('link');

    expect(links.length).toBe(3);
  });

  it('home should have an active class', () => {
    render(<MockNavBar />);
    const homeLink = screen.queryByRole('link', { name: 'Home' });
    expect(homeLink).toHaveClass('active');
  });
  it('home should have an active class', () => {
    render(<MockNavBar />);
    const homeLink = screen.queryByRole('link', { name: /calculator/i });
    expect(homeLink).not.toHaveClass('active');
  });
});
