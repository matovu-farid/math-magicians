import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MainList from '../MainList';

it('renders correctly', () => {
  const tree = renderer.create(<MainList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 14 buttons in total', () => {
  render(<MainList />);
  const lists = screen.queryAllByRole('listitem');

  expect(lists).toHaveLength(14);
});
