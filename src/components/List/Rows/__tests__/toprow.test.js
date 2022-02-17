import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopSymbolRow from '../toprow';

it('renders correctly', () => {
  const tree = renderer.create(<TopSymbolRow />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should have 3 buttons', () => {
  render(<TopSymbolRow />);
  const listItems = screen.queryAllByRole('listitem');

  expect(listItems.length).toBe(3);
});
