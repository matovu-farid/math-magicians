import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BottomRow from '../bottomrow';

const mockHandleButtonClick = jest.fn();
it('renders correctly', () => {
  const tree = renderer.create(<BottomRow handleButtonClick={mockHandleButtonClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('should have 2 buttons', () => {
  render(<BottomRow handleButtonClick={mockHandleButtonClick} />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(2);
});
