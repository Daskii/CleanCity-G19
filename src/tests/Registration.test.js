import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from '../components/Register';

describe('Register Component', () => {
  const mockOnRegister = jest.fn();

  beforeEach(() => {
    render(<Register onRegister={mockOnRegister} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test Case 1: Initial Render
  test('renders registration form with all fields', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  // Test Case 2: Field Validation
  test('shows error when submitting empty form', () => {
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(screen.getByText('Please fill in all fields.')).toBeInTheDocument();
    expect(mockOnRegister).not.toHaveBeenCalled();
  });

  // Test Case 3: Successful Registration
  test('calls onRegister with user data when form is valid', () => {
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password123'
    };

    fireEvent.change(screen.getByLabelText(/name/i), { 
      target: { value: testUser.name } 
    });
    fireEvent.change(screen.getByLabelText(/email/i), { 
      target: { value: testUser.email } 
    });
    fireEvent.change(screen.getByLabelText(/password/i), { 
      target: { value: testUser.password } 
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(mockOnRegister).toHaveBeenCalledWith({
      name: testUser.name,
      email: testUser.email
    });
    expect(screen.queryByText('Please fill in all fields.')).not.toBeInTheDocument();
  });

  // Test Case 4: Input Field Requirements
  test('validates email format', () => {
    const emailInput = screen.getByLabelText(/email/i);
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    expect(emailInput.validity.valid).toBe(false);
    expect(screen.getByText('Please fill in all fields.')).toBeInTheDocument();
  });

  // Test Case 5: Password Field Security
  test('password field obscures text', () => {
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  // Test Case 6: Auto-focus on Name Field
  test('auto-focuses on name field on mount', () => {
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveFocus();
  });

  // Test Case 7: Accessibility
  test('has proper aria attributes', () => {
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('aria-required', 'true');
  });
});
