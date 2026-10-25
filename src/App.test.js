// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenTangle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenTangle/i);
    expect(titleElement).toBeInTheDocument();
});
