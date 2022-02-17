import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainList from '../MainList';

it('should have 14 buttons in total', () => {
  render(<MainList />);
  const lists = screen.queryAllByRole('listitem');

  expect(lists).toHaveLength(14);
});
