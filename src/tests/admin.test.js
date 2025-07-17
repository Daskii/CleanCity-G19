import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Admin from '../components/Admin';

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

describe('Admin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Admin heading and summary', () => {
    render(<Admin />);
    expect(screen.getByText(/Admin: Manage Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Requests:/i)).toBeInTheDocument();
    expect(screen.getByText(/Missed Pickups:/i)).toBeInTheDocument();
  });

  test('renders requests from localStorage', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 1, date: '2024-07-01', name: 'Alice', location: 'Zone 1', status: 'Pending' },
      { id: 2, date: '2024-07-02', name: 'Bob', location: 'Zone 2', status: 'Missed' }
    ]));
    render(<Admin />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Zone 1')).toBeInTheDocument();
    expect(screen.getByText('Zone 2')).toBeInTheDocument();
    expect(screen.getByText('Missed')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  test('can mark a request as Completed', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 1, date: '2024-07-01', name: 'Alice', location: 'Zone 1', status: 'Pending' }
    ]));
    render(<Admin />);
    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('can mark a request as Missed', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 1, date: '2024-07-01', name: 'Alice', location: 'Zone 1', status: 'Pending' }
    ]));
    render(<Admin />);
    fireEvent.click(screen.getByText('Missed'));
    expect(screen.getByText('Missed')).toBeInTheDocument();
  });

  test('can delete a request', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 1, date: '2024-07-01', name: 'Alice', location: 'Zone 1', status: 'Pending' }
    ]));
    window.confirm = jest.fn(() => true); // Always confirm
    render(<Admin />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  test('shows correct missed pickups count', () => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 1, date: '2024-07-01', name: 'Alice', location: 'Zone 1', status: 'Missed' },
      { id: 2, date: '2024-07-02', name: 'Bob', location: 'Zone 2', status: 'Completed' },
      { id: 3, date: '2024-07-03', name: 'Carol', location: 'Zone 3', status: 'Missed' }
    ]));
    render(<Admin />);
    expect(screen.getByText(/Missed Pickups: 2/)).toBeInTheDocument();
  });
});