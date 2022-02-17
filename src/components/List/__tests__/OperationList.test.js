import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OperationList from '../OperationList';

it.skip('should have 5 buttons for operations', () => {
  render(<OperationList />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(5);
});
