import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TopSymbolRow from '../toprow';

it.skip('should have 3 buttons', () => {
  render(<TopSymbolRow />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(3);
});
