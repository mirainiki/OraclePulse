// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OraclePulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OraclePulse/i);
    expect(titleElement).toBeInTheDocument();
});
