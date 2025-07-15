# Manual Test Scripts – Authentication System

## TC-LOGIN-001: Login with Valid Credentials

**Description**:  
Ensure registered users can log in using valid credentials and are redirected to the dashboard.

**Preconditions**:  
1. User is registered and logged out.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Go to login page | Login form is displayed |
| 2 | Enter `user@example.com` / `Password123` | Fields accept input |
| 3 | Click "Login" | User is redirected to dashboard |

**Pass/Fail Criteria**:  
✅ Pass: User logs in successfully and is redirected to dashboard  
❌ Fail: Login fails despite valid credentials  

---

## TC-LOGIN-002: Reject Invalid Credentials

**Description**:  
Ensure system displays error messages for incorrect email/password.

**Preconditions**:  
1. User is logged out.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter wrong email/password | Error: "Invalid email or password." |
| 2 | Click "Login" | Form is not submitted |

**Pass/Fail Criteria**:  
✅ Pass: Error message appears; form blocks submission  
❌ Fail: Accepts invalid credentials  

---

## TC-LOGIN-003: Empty Login Field Validation

**Description**:  
Ensure the system displays specific error messages when email or password fields are empty.

**Preconditions**:  
1. Login page is open.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave both email and password fields blank | Errors: "Email is required", "Password is required" |
| 2 | Try clicking "Login" | Form is not submitted; cursor focuses on first empty field |

**Pass/Fail Criteria**:  
✅ Pass: Specific error messages appear for empty fields  
❌ Fail: Generic error or no validation  

---

## TC-SESSION-001: Session Stored in localStorage

**Description**:  
Ensure user session persists after refresh.

**Preconditions**:  
1. User is logged in.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Check localStorage for token | Session token is present |
| 2 | Refresh page | User remains logged in |

---

## TC-SESSION-002: Redirect to Intended Page After Login

**Description**:  
Ensure users are redirected to their originally requested page after logging in.

**Preconditions**:  
1. User tries to access `/profile` while logged out.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attempt to access `/profile` | Redirected to login page |
| 2 | Log in successfully | Redirected to `/profile` |

---

## TC-LOGOUT-001: Logout Clears Session

**Description**:  
Ensure logout clears session data and redirects to login page.

**Preconditions**:  
1. User is logged in.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Logout" | Redirected to login page; session data cleared |

---

## TC-TIMEOUT-001: Session Timeout After Inactivity

**Description**:  
Ensure the system automatically logs out the user after a period of inactivity (e.g., 30 minutes).

**Preconditions**:  
1. User is logged in  
2. Session timeout is set to 30 minutes

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in and note the time | Session starts |
| 2 | Do not interact with the system for 30+ minutes | System logs out the user automatically |
| 3 | Try to access `/profile` | Redirected to login with message: "Session expired. Please log in again." |
| 4 | Check localStorage | Session token is cleared |

**Pass/Fail Criteria**:  
✅ Pass: User is logged out after inactivity; session data is cleared  
❌ Fail: Session remains active indefinitely  

---

# Manual Test Scripts – Waste Management

## TC-01: Verify Successful Pickup Scheduling with Required Fields

**Description**:  
Ensure users can schedule a pickup with valid date, waste type, quantity, and address.

**Preconditions**:  
1. User is logged in  
2. User profile has a saved address

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to "Schedule Pickup" page | Form displays required fields |
| 2 | Enter:<br>- Date: Tomorrow’s date<br>- Waste Type: Recyclable<br>- Quantity: Medium<br>- Address: Auto-filled from profile | Fields accept input; address is pre-filled |
| 3 | Click "Submit" | Confirmation message: "Pickup scheduled for [date]." |

**Test Data**:  
- Date: [Tomorrow’s date]  
- Waste Type: Recyclable  
- Quantity: Medium  

**Pass/Fail Criteria**:  
✅ Pass: Pickup is scheduled; confirmation appears  
❌ Fail: Form rejects valid input or fails to submit  

---

## TC-02: Reject Pickup Dates <24 Hours in Advance

**Description**:  
Ensure the system blocks scheduling if the date is invalid (today/past).

**Preconditions**:  
1. User is logged in.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter today’s date in the pickup date field | System shows error: "Date must be at least 24 hours in advance." |
| 2 | Attempt to submit | Form is not submitted |

**Test Data**:  
- Date: [Today’s date]

**Pass/Fail Criteria**:  
✅ Pass: Error message appears; form blocks submission  
❌ Fail: Accepts invalid date  

---

## TC-03: Verify Time Slot Availability

**Description**:  
Ensure the system shows available time slots (e.g., 9 AM–12 PM, 1 PM–4 PM).

**Preconditions**:  
1. User has selected a valid future date.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select a valid pickup date | Time slot dropdown appears with available options |
| 2 | Choose a slot (e.g., "9 AM–12 PM") | Slot is selected |

**Test Data**:  
- Date: [Tomorrow’s date]  
- Time Slot: 9 AM–12 PM  

**Pass/Fail Criteria**:  
✅ Pass: Slots are displayed and selectable  
❌ Fail: No slots appear or are incorrectly marked "Unavailable"

---

## TC-04: Block Multiple Pickups on the Same Date

**Description**:  
Ensure users cannot schedule multiple pickups for the same date.

**Preconditions**:  
1. User has an existing pickup scheduled for tomorrow.

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attempt to schedule another pickup for the same date | Error: "Only one pickup per day is allowed." |
| 2 | Try to submit | Form is not submitted |

**Test Data**:  
- Date: [Existing pickup date]

**Pass/Fail Criteria**:  
✅ Pass: System blocks duplicate scheduling  
❌ Fail: Allows multiple pickups on the same date  

---

## TC-05: Verify Real-Time Status Updates for Pickup Requests

**Description**:  
Ensure the system provides real-time status updates for pickup requests without requiring manual refresh.

**Preconditions**:  
1. User has submitted a pickup request  
2. The system has accepted the request

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as a user with an active pickup request | Dashboard loads successfully |
| 2 | Navigate to "Request Status" page | Current status (e.g., "Pending") is displayed |
| 3 | Simulate backend status change (e.g., "Pending" → "Assigned") | Status updates automatically in the UI |

**Test Data**:  
- Pickup Request ID: [Example: PR-1001]

**Pass/Fail Criteria**:  
✅ Pass: Status updates in real-time (no manual refresh needed)  
❌ Fail: Status does not update or requires page refresh  

---

## TC-06: Verify Notification on Pickup Request Status Change

**Description**:  
Ensure the system sends notifications (in-app/email/SMS) when pickup status changes.

**Preconditions**:  
1. User has an active pickup request  
2. Notifications are enabled

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Trigger a status change (e.g., "Assigned" → "In Progress") | System processes the update |
| 2 | Check user’s notification inbox | Notification appears with updated status |

**Test Data**:  
- Notification Channel: [Email/App/SMS]

**Pass/Fail Criteria**:  
✅ Pass: Notification is received promptly  
❌ Fail: No notification or delayed notification  

---

## TC-07: Verify Feedback Submission After Pickup Completion

**Description**:  
Ensure users can submit feedback (rating + comments) after pickup is marked "Completed."

**Preconditions**:  
1. Pickup request status is "Completed"  
2. Feedback option is enabled

**Test Steps**:

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to "Completed Requests" | List of completed pickups is displayed |
| 2 | Click "Provide Feedback" for a request | Feedback form opens |
| 3 | Submit feedback (e.g., 5 stars + "Great service!") | Confirmation message appears |

**Test Data**:  
- Feedback: [Rating: 5, Comment: "Great service!"]

**Pass/Fail Criteria**:  
✅ Pass: Feedback is saved and confirmed  
❌ Fail: Submission fails or data is not stored  