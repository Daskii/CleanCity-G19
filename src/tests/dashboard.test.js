import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import '@testing-library/jest-dom';

describe('Dashboard', () => {
  test('renders Dashboard Analytics heading', () => {
    render(<Dashboard />);
    const headingElement = screen.getByText(/Dashboard Analytics/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all stat cards', () => {
    render(<Dashboard />);
    const totalRequests = screen.getByText(/Total Requests/i);
    const missedPickups = screen.getByText(/Missed Pickups/i);
    const blogPosts = screen.getByText(/Blog Posts/i);
    const communityPosts = screen.getByText(/Community Posts/i);

    expect(totalRequests).toBeInTheDocument();
    expect(missedPickups).toBeInTheDocument();
    expect(blogPosts).toBeInTheDocument();
    expect(communityPosts).toBeInTheDocument();
  });
});





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

describe("Dashboard Statistics and Charts", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Total Requests stat updates correctly", () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, date: "2024-01-01" },
      { id: 2, date: "2024-01-02" },
    ]));
    render(<Dashboard />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Missed Pickups stat updates correctly", () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, status: "missed" },
      { id: 2, status: "completed" },
      { id: 3, status: "missed" },
    ]));
    render(<Dashboard />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("Blog Posts stat updates correctly", () => {
    localStorage.setItem("blogPosts", JSON.stringify([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
    ]));
    render(<Dashboard />);
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  test("Community Posts stat updates correctly", () => {
    localStorage.setItem("communityPosts", JSON.stringify([
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
    ]));
    render(<Dashboard />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("Requests Per Month chart renders with data", () => {
    localStorage.setItem("pickupRequests", JSON.stringify([
      { id: 1, date: "2024-01-15" },
      { id: 2, date: "2024-01-20" },
      { id: 3, date: "2024-02-10" },
    ]));
    render(<Dashboard />);
    expect(screen.getByText("01/24")).toBeInTheDocument();
    expect(screen.getByText("02/24")).toBeInTheDocument();
    expect(screen.getAllByText("2")[0]).toBeInTheDocument(); // For Jan
    expect(screen.getAllByText("1")[0]).toBeInTheDocument(); // For Feb
  });

  test("Top Users leaderboard renders with data", () => {
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
    expect(screen.getByText(/UserA/)).toBeInTheDocument();
    expect(screen.getByText(/UserB/)).toBeInTheDocument();
    expect(screen.getByText(/UserC/)).toBeInTheDocument();
    // Verify activity counts (UserA: 3, UserB: 2, UserC: 3)
    expect(screen.getByText("UserA").parentElement).toHaveTextContent("3 actions");
    expect(screen.getByText("UserB").parentElement).toHaveTextContent("2 actions");
    expect(screen.getByText("UserC").parentElement).toHaveTextContent("3 actions");
  });
});