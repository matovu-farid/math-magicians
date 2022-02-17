import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TypePad from '../List';

it('should have 19 buttons in total', () => {
  render(<TypePad />);
  const lists = screen.queryAllByRole('listitem');

  expect(lists).toHaveLength(19);
});
