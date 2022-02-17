import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('app tests', () => {
  const MockApp = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('should should have tree links', () => {
    render(<MockApp />);
    const links = screen.queryAllByRole('link');

    expect(links.length).toBe(3);
  });
});
