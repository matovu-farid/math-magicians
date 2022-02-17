import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OpperationTile from '../OpperationTile';

it.skip('should display correct value', () => {
  render(<OpperationTile opp="+" />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('+');
});
