import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import App from './App';

describe('app tests', () => {
  const MockApp = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('renders correctly', () => {
    const tree = renderer.create(<MockApp />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should should have three links', () => {
    render(<MockApp />);
    const links = screen.queryAllByRole('link');

    expect(links.length).toBe(3);
  });

  it('should show calculator page when the calculator button is clicked', () => {
    render(<MockApp />);

    const homeLink = screen.queryByRole('link', { name: /calculator/i });
    expect(screen.queryByText(/Let us do some Math/i)).not.toBeInTheDocument();

    userEvent.click(homeLink);

    expect(screen.queryByText(/Let us do some Math/i)).toBeInTheDocument();
  });
});
