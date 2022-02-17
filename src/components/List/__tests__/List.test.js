import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TypePad from '../List';

it('renders correctly', () => {
  const tree = renderer.create(<TypePad />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 19 buttons in total', () => {
  render(<TypePad />);
  const lists = screen.queryAllByRole('listitem');

  expect(lists).toHaveLength(19);
});
