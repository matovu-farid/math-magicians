import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OpperationTile from '../OpperationTile';

it('renders correctly', () => {
  const tree = renderer.create(<OpperationTile opp="+" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display correct value', () => {
  render(<OpperationTile opp="+" />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('+');
});
