import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Example Avatar Group Component/i);
  expect(linkElement).toBeInTheDocument();
});
