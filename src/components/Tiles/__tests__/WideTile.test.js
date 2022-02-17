import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import WideTile from '../WideTile';

it('renders correctly', () => {
  const tree = renderer.create(<WideTile value={0} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should display correct value', () => {
  render(<WideTile value={0} />);
  const button = screen.queryByRole('button');

  expect(button).toHaveTextContent('0');
});
