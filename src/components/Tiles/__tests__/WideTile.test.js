import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WideTile from '../WideTile';

it.skip('should display correct value', () => {
  render(<WideTile value={0} />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('0');
});
