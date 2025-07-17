import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import '@testing-library/jest-dom';

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

describe('Dashboard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Dashboard Analytics heading', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Dashboard Analytics/i)).toBeInTheDocument();
  });

  test('renders all stat cards', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Total Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/Missed Pickups/i)).toBeInTheDocument();
    expect(screen.getByText(/Blog Posts/i)).toBeInTheDocument();
    expect(screen.getByText(/Community Posts/i)).toBeInTheDocument();
  });

  test('Total Requests stat updates correctly', () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, date: "2024-01-01" },
      { id: 2, date: "2024-01-02" }
    ]));
    render(<Dashboard />);
    // Find the stat value for Total Requests specifically
    const totalRequestsStat = screen.getByText(/Total Requests/i).parentElement;
    expect(totalRequestsStat).toHaveTextContent("2");
  });

  test('Missed Pickups stat updates correctly', () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, status: "missed" },
      { id: 2, status: "completed" },
      { id: 3, status: "missed" }
    ]));
    render(<Dashboard />);
    const missedPickupsStat = screen.getByText(/Missed Pickups/i).parentElement;
    expect(missedPickupsStat).toHaveTextContent("2");
  });

  test('Blog Posts stat updates correctly', () => {
    localStorage.setItem("blogPosts", JSON.stringify([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
    ]));
    render(<Dashboard />);
    const blogPostsStat = screen.getByText(/Blog Posts/i).parentElement;
    expect(blogPostsStat).toHaveTextContent("4");
  });

  test('Community Posts stat updates correctly', () => {
    localStorage.setItem("communityPosts", JSON.stringify([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
    ]));
    render(<Dashboard />);
    const communityPostsStat = screen.getByText(/Community Posts/i).parentElement;
    expect(communityPostsStat).toHaveTextContent("5");
  });

  test('Requests Per Month chart renders with data', () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, date: "2024-01-15" },
      { id: 2, date: "2024-01-20" },
      { id: 3, date: "2024-02-10" }
    ]));
    render(<Dashboard />);
    expect(screen.getByText("01/24")).toBeInTheDocument();
    expect(screen.getByText("02/24")).toBeInTheDocument();
    // Optionally, check for the chart's existence by heading
    expect(screen.getByText(/Requests Per Month/i)).toBeInTheDocument();
  });

  test('Top Users leaderboard renders with data', () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { name: "UserA" }, { name: "UserA" }, { name: "UserB" }
    ]));
    localStorage.setItem("blogPosts", JSON.stringify([
      { author: "UserA" }, { author: "UserC" }
    ]));
    localStorage.setItem("communityPosts", JSON.stringify([
      { user: "UserB" }, { user: "UserC" }, { user: "UserC" }
    ]));
    render(<Dashboard />);
    // Check users are present
    expect(screen.getByText(/UserA/)).toBeInTheDocument();
    expect(screen.getByText(/UserB/)).toBeInTheDocument();
    expect(screen.getByText(/UserC/)).toBeInTheDocument();
    // Check activity counts (parentElement is the <li>)
    expect(screen.getByText("UserA").parentElement).toHaveTextContent("3 actions");
    expect(screen.getByText("UserB").parentElement).toHaveTextContent("2 actions");
    expect(screen.getByText("UserC").parentElement).toHaveTextContent("3 actions");
  });
});
