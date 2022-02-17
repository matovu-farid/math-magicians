import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

it('should have a heading with the word "welcome"', () => {
  render(<Home />);
  const heading = screen.queryByRole('heading');

  expect(heading).toHaveTextContent(/welcome/i);
});
