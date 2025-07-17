import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { login as authLogin, getCurrentUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mock the authService and react-router-dom
jest.mock('../services/authService');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: () => ({
    state: { from: '/profile' }
  })
}));

describe('Login Component', () => {
  const mockNavigate = jest.fn();
  const mockUser = {
    name: 'testuser',
    email: 'test@example.com',
    avatar: 'https://i.pravatar.cc/100?u=test@example.com',
    role: 'user'
  };

  beforeEach(() => {
    useNavigate.mockImplementation(() => mockNavigate);
    getCurrentUser.mockReturnValue(null);
    authLogin.mockImplementation((email, password) => ({
      ...mockUser,
      role: email.includes('admin') ? 'admin' : 'user'
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    useNavigate.mockReset();
  });

  test('renders login form with all elements', () => {
    render(<Login />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/CleanCity/i)).toBeInTheDocument();
  });

  test('focuses on email input on mount', () => {
    render(<Login />);
    expect(screen.getByLabelText('Email')).toHaveFocus();
  });

  test('shows error when form is submitted with empty fields', () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/please enter email and password/i);
    expect(authLogin).not.toHaveBeenCalled();
  });

  test('successfully logs in with valid credentials', () => {
    render(<Login />);
    
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(authLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(mockNavigate).toHaveBeenCalledWith('/profile', { replace: true });
  });

  test('redirects to profile if user is already logged in', () => {
    getCurrentUser.mockReturnValueOnce(mockUser);
    render(<Login />);
    expect(mockNavigate).toHaveBeenCalledWith('/profile', { replace: true });
  });
});