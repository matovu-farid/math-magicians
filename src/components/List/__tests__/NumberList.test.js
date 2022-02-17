import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NumberList from '../NumberList';

it('renders correctly', () => {
  const tree = renderer.create(<NumberList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 9 list items', () => {
  render(<NumberList />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(9);
});
