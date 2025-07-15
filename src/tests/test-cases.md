# CleanCity - Test Cases and Checklists

## Epic: Community Features Testing

### Task: Test blog system and community feed functionalities  
> ❌ Not applicable — these features are not implemented yet.

### Task: User profile functionality testing

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_PROFILE_01 | Successful login | Enter demo user credentials → Submit | Redirected to Dashboard, welcome message shown |
| TC_PROFILE_02 | Invalid login attempt | Enter wrong email/password → Submit | Error message shown |
| TC_PROFILE_03 | Register new user | Fill all fields correctly → Submit | Success message shown, redirected to login |
| TC_PROFILE_04 | Required registration fields validation | Leave name/email/password empty → Submit | Appropriate error messages shown |
| TC_PROFILE_05 | Password confirmation mismatch | Enter different passwords → Submit | Error message shown |
| TC_PROFILE_06 | Admin badge visibility | Log in as admin@cleancity.com | "Admin" badge visible next to name |
| TC_PROFILE_07 | Logout functionality | Click logout button | Session cleared, redirected to login page |

### Task: Social features interaction testing

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_SOCIAL_01 | Submit feedback with valid Request ID and reason | Enter valid request ID + reason → Submit | Success message shown |
| TC_SOCIAL_02 | Submit feedback with invalid Request ID | Enter invalid format (e.g., XYZ) → Submit | Error message shown |
| TC_SOCIAL_03 | Leave required fields empty → Submit | Leave Request ID or Reason blank → Submit | Error messages shown |
| TC_SOCIAL_04 | Optional comment field | Leave comment field empty → Submit | Submission still allowed |
| TC_SOCIAL_05 | Feedback stored in localStorage | Use DevTools → Check localStorage | Feedback stored under key `cleancity_feedback` |

---

## Epic: Admin Functions Testing

### Task: Admin panel functionality

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_ADMIN_01 | Access admin panel | Log in as admin@cleancity.com → Click “Admin” link | Admin page loads |
| TC_ADMIN_02 | Update request status | Select request + new status → Click Update | Status changes reflected in table |
| TC_ADMIN_03 | Stats refresh after update | Change a request status → Observe stats | Count updates accordingly |
| TC_ADMIN_04 | Disabled update button | Don’t select request/status → Click Update | Button remains disabled until both selected |
| TC_ADMIN_05 | Data consistency check | Compare dropdown selection with table row | Selected request matches corresponding row in table |

### Task: Design test cases for leaderboards and gamification features  
> Planned for future implementation

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_GAME_01 | User earns points | Complete pickup request | Points increase in profile |
| TC_GAME_02 | Badge unlocked | Recycle 5 times | New badge appears |
| TC_GAME_03 | View leaderboard | Navigate to leaderboard tab | Top users displayed correctly |
| TC_GAME_04 | Filter leaderboard | Apply location/time filters | Data updates accordingly |

---

## Epic: Non-Functional Testing

### Task: Page load performance testing

| TC_ID | Description | Tool | Target |
|--------|-------------|------|--------|
| TC_NON_FUNC_01 | First Contentful Paint | Lighthouse | <1.8s |
| TC_NON_FUNC_02 | Time to Interactive | Lighthouse | <3s |
| TC_NON_FUNC_03 | Largest Contentful Paint | Lighthouse | <2.5s |
| TC_NON_FUNC_04 | Fully Loaded Time | Lighthouse | <4s |

### Task: Browser compatibility testing

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_COMPAT_01 | Responsive layout | Resize browser window | Layout adjusts without breaking |
| TC_COMPAT_02 | Form submission works | Try forms in all browsers | Works consistently |
| TC_COMPAT_03 | Admin panel accessibility | Log in as admin on mobile | Admin UI is usable on small screens |
| TC_COMPAT_04 | Date input compatibility | Use `<input type="date">` on mobile/desktop | Calendar picker shows correctly |

### Task: Plan real-time data updates testing  
> Planned for future implementation

| TC_ID | Description | Steps | Expected Result |
|--------|-------------|-------|------------------|
| TC_REALTIME_01 | Live request updates | One user submits request → Another views dashboard | New request appears instantly |
| TC_REALTIME_02 | Status change sync | Admin updates status → User checks dashboard | Status reflects immediately |
| TC_REALTIME_03 | Connection loss recovery | Disconnect internet → Reconnect | App resyncs with server data |
| TC_REALTIME_04 | Multiple user edits | Two admins edit same request | Last update wins or conflict resolved gracefully |


# User Registration Test Cases

## TC-01: Verify New User Registration with Valid Data

**Description**:  
Ensure users can register with valid email, password, full name, and optional phone number.

**Preconditions**:  
1. User is not logged in.  
2. Email is not already registered.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to "Register" page. | Registration form displays required fields. |
| 2 | Enter:<br>- Email: user@example.com<br>- Password: Password123<br>- Confirm Password: Password123<br>- Full Name: John Doe<br>- Phone: +1234567890 (optional). | Fields accept input. |
| 3 | Click "Register." | Account is created; confirmation message appears. |

**Test Data**:  
- Email: user@example.com  
- Password: Password123 (meets 8-char minimum)  
- Full Name: John Doe (2–50 chars)

**Pass/Fail Criteria**:  
- Pass: Account is created; user receives confirmation.  
- Fail: Registration fails despite valid input.

---

## TC-02: Reject Invalid Email Formats

**Description**:  
Ensure the system blocks registration for invalid emails (e.g., missing "@").

**Preconditions**:  
1. Registration page is open.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter email: invalid-email. | Error: "Enter a valid email address." |
| 2 | Submit the form. | Form is not submitted. |

**Test Data**:  
- Email: invalid-email (no "@" or ".")

**Pass/Fail Criteria**:  
- Pass: Error message appears; form blocks submission.  
- Fail: Accepts invalid email.

---

## TC-03: Enforce Minimum Password Length (8 Chars)

**Description**:  
Ensure passwords <8 characters are rejected.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter password: Pass123. | Error: "Password must be at least 8 characters." |

**Test Data**:  
- Password: Pass123 (7 chars)

---

## TC-04: Verify Password and Confirm Password Match

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter password: Password123, confirm password: Password456. | Error: "Passwords do not match." |

**Test Data**:  
- Password: Password123  
- Confirm Password: Password456

---

## TC-05: Reject Invalid Full Names (Too Short/Long)

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter full name: A (1 character). | Error: "Name must be 2–50 characters." |
| 2 | Enter full name: A very long name exceeding fifty characters limit test case. | Error: "Name must be 2–50 characters." |

---

## TC-06: Verify New Account Has "User" Role

**Description**:  
Ensure newly registered users are assigned the "User" role by default.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Register a new user (use TC-FR-001-01 steps). | Account is created. |
| 2 | Check user role in the database/admin panel. | Role = "User." |

---

# User Login & Logout Test Cases

## TC-01: Verify Login with Valid Credentials

**Description**:  
Ensure registered users can log in using email and password and are redirected to their intended page.

**Preconditions**:  
1. User is registered (user@example.com, Password123).  
2. User is not logged in.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to login page. | Login form displays email and password fields. |
| 2 | Enter valid email and password. | Fields accept input. |
| 3 | Click "Login." | User is redirected to dashboard/home page. |

**Test Data**:  
- Email: user@example.com  
- Password: Password123

**Pass/Fail Criteria**:  
- Pass: User logs in; session is created; redirects correctly.  
- Fail: Login fails despite valid credentials.

---

## TC-02: Reject Invalid Credentials

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter email: wrong@example.com, password: Wrong123. | Error: "Invalid email or password." |
| 2 | Submit form. | Form is not submitted. |

**Test Data**:  
- Email: wrong@example.com  
- Password: Wrong123

---

## TC-03: Verify Session Storage in localStorage

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in successfully. | localStorage contains session token. |
| 2 | Refresh the page. | User remains logged in. |

---

## TC-04: Verify Redirect to Intended Page

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attempt to access /profile while logged out. | Redirected to login page. |
| 2 | Log in successfully. | Redirected to /profile. |

---

## TC-05: Verify Logout Clears Session

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in successfully. | Session is active. |
| 2 | Click "Logout." | localStorage is cleared; redirected to login page. |

---

## TC-06: Validate Empty Credentials During Login

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave both email and password fields empty. | Error: "Email is required." and "Password is required." |
| 2 | Enter email only (user@example.com), leave password empty. | Error: "Password is required." |
| 3 | Enter password only (Password123), leave email empty. | Error: "Email is required." |
| 4 | Click "Login" in all above cases. | Form is not submitted. Cursor focuses on the first empty field. |

**Test Data**:  
- Email: [Empty] or user@example.com  
- Password: [Empty] or Password123

**Pass/Fail Criteria**:  
- Pass: Specific error messages appear for empty fields.  
- Fail: Generic error or no validation.

---

# Pickup Scheduling Test Cases

## TC-01: Verify Successful Pickup Scheduling with Required Fields

**Description**:  
Ensure users can schedule a pickup with valid date, waste type, quantity, and address.

**Preconditions**:  
1. User is logged in.  
2. User profile has a saved address.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to "Schedule Pickup" page. | Form displays required fields (*). |
| 2 | Enter:<br>- Date: Tomorrow’s date<br>- Waste Type: Recyclable<br>- Quantity: Medium<br>- Address: Auto-filled from profile. | Fields accept input. Address is pre-filled. |
| 3 | Click "Submit." | Confirmation message: "Pickup scheduled for [date]." |

**Test Data**:  
- Date: [Tomorrow’s date]  
- Waste Type: Recyclable  
- Quantity: Medium

**Pass/Fail Criteria**:  
- Pass: Pickup is scheduled; confirmation appears.  
- Fail: Form rejects valid input or fails to submit.

---
## TC-02: Reject Pickup Dates <24 Hours in Advance

**Description**:  
Ensure the system blocks scheduling if the date is invalid (today/past).

**Preconditions**:  
1. User is logged in.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter today’s date in the pickup date field. | System shows error: "Date must be at least 24 hours in advance." |
| 2 | Attempt to submit. | Form is not submitted. |

**Test Data**:  
- Date: [Today’s date]

**Pass/Fail Criteria**:  
- ✅ Pass: Error message appears; form blocks submission.  
- ❌ Fail: Accepts invalid date.

---

## TC-03: Verify Time Slot Availability

**Description**:  
Ensure the system shows available time slots (e.g., 9 AM–12 PM, 1 PM–4 PM).

**Preconditions**:  
1. User has selected a valid future date.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select a valid pickup date. | Time slot dropdown appears with available options. |
| 2 | Choose a slot (e.g., "9 AM–12 PM"). | Slot is selected. |

**Test Data**:  
- Date: [Tomorrow’s date]  
- Time Slot: 9 AM–12 PM

**Pass/Fail Criteria**:  
- ✅ Pass: Slots are displayed and selectable.  
- ❌ Fail: No slots appear or are incorrectly marked "Unavailable."

---

## TC-04: Block Multiple Pickups on the Same Date

**Description**:  
Ensure users cannot schedule multiple pickups for the same date.

**Preconditions**:  
1. User has an existing pickup scheduled for tomorrow.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attempt to schedule another pickup for the same date. | Error: "Only one pickup per day is allowed." |
| 2 | Try to submit. | Form is not submitted. |

**Test Data**:  
- Date: [Existing pickup date]

**Pass/Fail Criteria**:  
- ✅ Pass: System blocks duplicate scheduling.  
- ❌ Fail: Allows multiple pickups on the same date.
