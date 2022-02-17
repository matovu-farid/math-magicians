import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OperationList from '../OperationList';

it('renders correctly', () => {
  const tree = renderer.create(<OperationList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 5 buttons for operations', () => {
  render(<OperationList />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(5);
});
