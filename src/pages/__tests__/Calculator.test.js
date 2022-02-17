import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

it('should have the text "Let us do some Math" on the page', () => {
  render(<Calculator />);
  const button = screen.getByText(/Let us do some Math/i);

  expect(button).toBeInTheDocument();
});
