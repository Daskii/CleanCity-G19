import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogAdmin from '../components/blog/BlogAdmin';

// Mock localStorage for testing purposes
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; }
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('BlogAdmin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Blog Admin Panel heading', () => {
    render(<BlogAdmin />);
    expect(screen.getByText(/Blog Admin Panel/i)).toBeInTheDocument();
  });

  test('renders initial blog posts', () => {
    render(<BlogAdmin />);
    expect(screen.getByText('5 Ways to Reduce Household Waste')).toBeInTheDocument();
    expect(screen.getByText('How CleanCity Improved My Neighborhood')).toBeInTheDocument();
    expect(screen.getByText('Understanding Recycling Symbols')).toBeInTheDocument();
  });

  test('can start creating a new post', () => {
    render(<BlogAdmin />);
    fireEvent.click(screen.getByText(/Create Post/i));
    // Use getAllByPlaceholderText to avoid ambiguity
    expect(screen.getAllByPlaceholderText(/Title/i)[0]).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/Tags/i)[0]).toBeInTheDocument();
  });

  test('can create a new blog post', () => {
    render(<BlogAdmin />);
    fireEvent.click(screen.getByText(/Create Post/i));
    // Use getAllByPlaceholderText to select the first input for Title and Tags
    const titleInput = screen.getAllByPlaceholderText(/Title/i)[0];
    const tagsInput = screen.getAllByPlaceholderText(/Tags/i)[0];
    fireEvent.change(titleInput, { target: { value: 'Test Post' } });
    fireEvent.change(tagsInput, { target: { value: 'Test, Blog' } });
    fireEvent.change(screen.getByPlaceholderText(/Content/i), { target: { value: 'This is a test blog post.' } });
    fireEvent.click(screen.getByRole('button', { name: /Create Post/i }));
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });

  test('can edit a blog post', () => {
    render(<BlogAdmin />);
    fireEvent.click(screen.getByLabelText(/Edit post 5 Ways to Reduce Household Waste/i));
    // Use getAllByPlaceholderText to select the first input for Title
    const titleInput = screen.getAllByPlaceholderText(/Title/i)[0];
    fireEvent.change(titleInput, { target: { value: 'Updated Title' } });
    fireEvent.click(screen.getByRole('button', { name: /Update Post/i }));
    expect(screen.getByText('Updated Title')).toBeInTheDocument();
  });

  test('can delete a blog post', () => {
    render(<BlogAdmin />);
    window.confirm = jest.fn(() => true); // Mock confirm dialog to always accept
    fireEvent.click(screen.getByLabelText(/Delete post 5 Ways to Reduce Household Waste/i));
    expect(screen.queryByText('5 Ways to Reduce Household Waste')).not.toBeInTheDocument();
  });
});
