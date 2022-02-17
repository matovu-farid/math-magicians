import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NumberList from '../NumberList';

it('should have 9 list items', () => {
  render(<NumberList />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(9);
});
