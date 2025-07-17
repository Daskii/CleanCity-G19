// src/tests/community.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommunityFeed from '../components/community/CommunityFeed';
import '@testing-library/jest-dom';

beforeEach(() => {
  localStorage.clear();
});

describe('CommunityFeed', () => {
  test('allows user to create a new post', () => {
    const { container } = render(<CommunityFeed />);

    const textarea = screen.getByPlaceholderText(/share something/i);

    // Select the post button ONLY inside the new post form
    const postForm = container.querySelector('.community-post-form');
    const postButton = postForm.querySelector('button[type="submit"]');

    fireEvent.change(textarea, { target: { value: 'Hello, community!' } });
    fireEvent.click(postButton);

    expect(screen.getByText('Hello, community!')).toBeInTheDocument();
    expect(textarea).toHaveValue('');
  });

  test('allows user to like and unlike a post', () => {
    render(<CommunityFeed />);

    // Like buttons have aria-label "Like this post" or "Unlike this post"
    const likeButtons = screen.getAllByRole('button', { name: /like this post/i });
    const firstLikeButton = likeButtons[0];

    const initialLikes = parseInt(firstLikeButton.textContent.match(/\d+/)[0]);

    fireEvent.click(firstLikeButton);
    expect(firstLikeButton).toHaveTextContent(`${initialLikes + 1}`);
    expect(firstLikeButton.classList.contains('liked')).toBe(true);

    fireEvent.click(firstLikeButton);
    expect(firstLikeButton).toHaveTextContent(`${initialLikes}`);
    expect(firstLikeButton.classList.contains('liked')).toBe(false);
  });

  test('allows user to add a comment to a post', () => {
    render(<CommunityFeed />);
  
    const commentButtons = screen.getAllByRole('button', { name: /show comments/i });
    fireEvent.click(commentButtons[0]); // open comments for first post
  
    const commentForms = screen.getAllByRole('form');
    const firstCommentForm = commentForms[0];
  
    const input = within(firstCommentForm).getByPlaceholderText(/add a comment/i);
    const commentButton = within(firstCommentForm).getByRole('button', { name: /comment/i });
  
    fireEvent.change(input, { target: { value: 'Nice job!' } });
    fireEvent.click(commentButton);
  
    expect(screen.getByText(/nice job!/i)).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
  

  test('toggles comment section visibility', () => {
    render(<CommunityFeed />);

    const commentButton = screen.getAllByRole('button', { name: /show comments/i })[0];

    // Initially hidden
    expect(screen.queryByPlaceholderText(/add a comment/i)).not.toBeInTheDocument();

    // Show comments
    fireEvent.click(commentButton);
    expect(screen.getByPlaceholderText(/add a comment/i)).toBeInTheDocument();

    // Hide comments
    fireEvent.click(commentButton);
    expect(screen.queryByPlaceholderText(/add a comment/i)).not.toBeInTheDocument();
  });
});
