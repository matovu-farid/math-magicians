import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

it.skip('should have the word "mathematics" in its text', () => {
  render(<Quote />);
  const paragraph = screen.queryByText(/mathematics/i);

  expect(paragraph).toBeInTheDocument();
});
