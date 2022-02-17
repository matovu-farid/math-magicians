import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NumberTile from '../NumberTile';

it.skip('should display correct value', () => {
  render(<NumberTile value={7} />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('7');
});
