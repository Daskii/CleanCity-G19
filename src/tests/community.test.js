import { test, expect } from '@playwright/test';

test.describe('Community Feed', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/community');
  });

  test('should allow a user to create a new post', async ({ page }) => {
    const postContent = 'This is a new test post from Playwright.';
    await page.fill('textarea[placeholder="Share something with the community..."]', postContent);
    await page.click('button:has-text("Post")');
    await expect(page.locator(`text=${postContent}`)).toBeVisible();
    await expect(page.locator('textarea[placeholder="Share something with the community..."]')).toHaveValue('');
  });

  test('should allow a user to like and unlike a post', async ({ page }) => {
    // Assuming there's at least one post initially
    const initialLikeButton = page.locator('.community-post-card .like-btn').first();
    const initialLikesText = await initialLikeButton.textContent();
    const initialLikes = parseInt(initialLikesText.match(/\d+/)[0]);

    // Like the post
    await initialLikeButton.click();
    await expect(initialLikeButton).toHaveTextContent(`${initialLikes + 1}`);
    await expect(initialLikeButton).toHaveClass(/liked/);

    // Unlike the post
    await initialLikeButton.click();
    await expect(initialLikeButton).toHaveTextContent(`${initialLikes}`);
    await expect(initialLikeButton).not.toHaveClass(/liked/);
  });

  test('should allow a user to add a comment to a post', async ({ page }) => {
    // Assuming there's at least one post initially
    const commentButton = page.locator('.community-post-card .comment-btn').first();
    await commentButton.click(); // Open comments section

    const commentText = 'This is a test comment from Playwright.';
    await page.fill('input[placeholder="Add a comment..."]', commentText);
    await page.click('form.comment-form button:has-text("Comment")');

    await expect(page.locator(`text=${commentText}`)).toBeVisible();
    await expect(page.locator('input[placeholder="Add a comment..."]')).toHaveValue('');
  });

  test('should toggle comment section visibility', async ({ page }) => {
    const commentButton = page.locator('.community-post-card .comment-btn').first();
    const commentSection = page.locator('.comments-section').first();

    // Initially hidden
    await expect(commentSection).toBeHidden();

    // Click to show
    await commentButton.click();
    await expect(commentSection).toBeVisible();

    // Click to hide again
    await commentButton.click();
    await expect(commentSection).toBeHidden();
  });
});