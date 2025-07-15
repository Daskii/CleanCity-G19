import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /schedule a waste pickup/i });
    expect(heading).toBeInTheDocument();
  });

  test('shows error when form is submitted with missing fields', () => {
    render(<Home />);
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    fireEvent.click(submitButton);
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent(/please fill in all required fields/i);
  });

  test('submits form with valid input and shows success message', () => {
    render(<Home />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/pickup location/i), { target: { value: 'Nairobi' } });
    fireEvent.change(screen.getByLabelText(/waste type/i), { target: { value: 'General Waste' } });
    fireEvent.change(screen.getByLabelText(/preferred pickup date/i), { target: { value: '2025-07-20' } });

    fireEvent.click(screen.getByRole('button', { name: /submit request/i }));

    const success = screen.getByText(/your waste pickup request has been submitted/i);
    expect(success).toBeInTheDocument();
  });
});