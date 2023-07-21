import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/jamming/i);
  expect(titleElement).toBeInTheDocument();
});
