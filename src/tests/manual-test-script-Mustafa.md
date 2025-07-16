Manual Test Scripts – Authentication System
TC-LOGIN-001 – Login with valid credentials
Preconditions: User is registered and logged out.
Test Steps:
1.	1. Go to login page
2.	2. Enter 'user@example.com' / 'Password123'
3.	3. Click 'Login'
Expected Result: User is redirected to dashboard.

TC-LOGIN-002 – Reject invalid credentials
Preconditions: User is logged out.
Test Steps:
4.	1. Enter wrong email/password
5.	2. Click 'Login'
Expected Result: Error: 'Invalid email or password.'

TC-LOGIN-003 – Empty login field validation
Preconditions: Login page is open.
Test Steps:
6.	1. Leave fields blank
7.	2. Try clicking 'Login'
Expected Result: Errors: 'Email is required', 'Password is required'

TC-SESSION-001 – Session stored in localStorage
Preconditions: User is logged in.
Test Steps:
8.	1. Check localStorage for token
9.	2. Refresh page
Expected Result: Session persists; user stays logged in.

TC-SESSION-002 – Redirect to intended page after login
Preconditions: User tries to access /profile while logged out.
Test Steps:
10.	1. Attempt access
11.	2. Redirected to login
12.	3. Login
13.	4. Redirected to /profile
Expected Result: User redirected successfully.

TC-LOGOUT-001 – Logout clears session
Preconditions: User is logged in.
Test Steps:
14.	1. Click 'Logout'
Expected Result: Redirect to login; session data cleared.

TC-TIMEOUT-001 – Session timeout after inactivity
Preconditions: Session is set to 30 mins. User is logged in.
Test Steps:
15.	1. Login
16.	2. Inactive for 30+ mins
17.	3. Access /profile
Expected Result: Redirected to login with 'Session expired' message.





Manual Test Scripts – Waste Management
TC-01 – Verify Successful Pickup Scheduling with Required Fields
Preconditions: User is logged in. User profile has a saved address.
Test Steps:
18.	1. Navigate to 'Schedule Pickup' page
19.	2. Enter:
20.	- Date: Tomorrow’s date
21.	- Waste Type: Recyclable
22.	- Quantity: Medium
23.	- Address: Auto-filled from profile
24.	3. Click 'Submit'
Expected Result: Confirmation message: 'Pickup scheduled for [date].'

TC-02 – Reject Pickup Dates <24 Hours in Advance
Preconditions: User is logged in.
Test Steps:
25.	1. Enter today’s date in the pickup date field
26.	2. Attempt to submit
Expected Result: Error: 'Date must be at least 24 hours in advance.'

TC-03 – Verify Time Slot Availability
Preconditions: User has selected a valid future date.
Test Steps:
27.	1. Select a valid pickup date
28.	2. Choose a slot (e.g., '9 AM–12 PM')
Expected Result: Slots are displayed and selectable.

TC-04 – Block Multiple Pickups on the Same Date
Preconditions: User has an existing pickup scheduled for tomorrow.
Test Steps:
29.	1. Attempt to schedule another pickup for the same date
30.	2. Try to submit
Expected Result: Error: 'Only one pickup per day is allowed.'

TC-05 – Verify Real-Time Status Updates for Pickup Requests
Preconditions: User has submitted a pickup request. The system has accepted the request.
Test Steps:
31.	1. Log in as a user with an active pickup request
32.	2. Navigate to 'Request Status' page
33.	3. Simulate backend status change
Expected Result: Status updates in real-time (no manual refresh needed).

TC-06 – Verify Notification on Pickup Request Status Change
Preconditions: User has an active pickup request. Notifications are enabled.
Test Steps:
34.	1. Trigger a status change
35.	2. Check user’s notification inbox
Expected Result: Notification appears with updated status.

TC-07 – Verify Feedback Submission After Pickup Completion
Preconditions: Pickup request status is 'Completed.' Feedback option is enabled.
Test Steps:
36.	1. Navigate to 'Completed Requests'
37.	2. Click 'Provide Feedback'
38.	3. Submit feedback
Expected Result: Confirmation message appears.


