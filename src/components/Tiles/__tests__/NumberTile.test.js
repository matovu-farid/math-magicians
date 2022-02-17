import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NumberTile from '../NumberTile';

it('renders correctly', () => {
  const tree = renderer.create(<NumberTile value={7} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display correct value', () => {
  render(<NumberTile value={7} />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('7');
});
