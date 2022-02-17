import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BottomRow from '../bottomrow';

const mockHandleButtonClick = jest.fn();
it.skip('should have 2 buttons', () => {
  render(<BottomRow handleButtonClick={mockHandleButtonClick} />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(2);
});
