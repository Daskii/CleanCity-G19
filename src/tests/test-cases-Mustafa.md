User Registration Test Cases  
Title:
TC-01-Verify New User Registration with Valid Data
Description:
Ensure users can register with valid email, password, full name, and optional phone number.
Preconditions:
1.	User is not logged in.
2.	Email is not already registered.
Test Steps:
Step	Action	Expected Result
1	Navigate to "Register" page.	Registration form displays required fields.
2	Enter:
- Email: user@example.com
- Password: Password123
- Confirm Password: Password123
- Full Name: John Doe
- Phone: +1234567890 (optional).	Fields accept input.
3	Click "Register."	Account is created; confirmation message appears.
Test Data:
•	Email: user@example.com
•	Password: Password123 (meets 8-char minimum)
•	Full Name: John Doe (2-50 chars)

Pass/Fail Criteria:
•	Pass: Account is created; user receives confirmation.
•	Fail: Registration fails despite valid input.
________________________________________
Title:
TC-02-Reject Invalid Email Formats
Description:
Ensure the system blocks registration for invalid emails (e.g., missing "@").
Preconditions:
1.	Registration page is open.
Test Steps:
Step	Action	Expected Result
1	Enter email: invalid-email.	Error: "Enter a valid email address."
2	Submit the form.	Form is not submitted.
Test Data:
•	Email: invalid-email (no "@" or ".")
Pass/Fail Criteria:
•	Pass: Error message appears; form blocks submission.
•	Fail: Accepts invalid email.


________________________________________


Title: 
TC-03-Enforce Minimum Password Length (8 Chars)
Description:
Ensure passwords <8 characters are rejected.
Test Steps:
Step	Action	Expected Result
1	Enter password: Pass123.	Error: "Password must be at least 8 characters."
Test Data:
•	Password: Pass123 (7 chars)
Result:
☐ Pass ☐ Fail
________________________________________
Title: 
TC-04-Verify Password and Confirm Password Match
Test Steps:
Step	Action	Expected Result
1	Enter password: Password123, confirm password: Password456.	Error: "Passwords do not match."
Test Data:
•	Password: Password123
•	Confirm Password: Password456
________________________________________


Title: 
TC-05-Reject Invalid Full Names (Too Short/Long)
Test Steps:
Step	Action	Expected Result
1	Enter full name: A (1 character).	Error: "Name must be 2-50 characters."
2	Enter full name: A very long name exceeding fifty characters limit test case.	Error: "Name must be 2-50 characters."

Title: 
TC-06-Verify New Account Has "User" Role
Description:
Ensure newly registered users are assigned the "User" role by default.
Test Steps:
Step	Action	Expected Result
1	Register a new user (use TC-FR-001-01 steps).	Account is created.
2	Check user role in the database/admin panel.	Role = "User."






User Login & Logout Test Cases 
________________________________________
Title: 
TC-01-Verify Login with Valid Credentials
Description:
Ensure registered users can log in using email and password and are redirected to their intended page.
Preconditions:
1.	User is registered (user@example.com, Password123).
2.	User is not logged in.
Test Steps:
Step	Action	Expected Result
1	Navigate to login page.	Login form displays email and password fields.
2	Enter valid email and password.	Fields accept input.
3	Click "Login."	User is redirected to dashboard/home page.
Test Data:
•	Email: user@example.com
•	Password: Password123
Pass/Fail Criteria:
•	Pass: User logs in; session is created; redirects correctly.
•	Fail: Login fails despite valid credentials.

________________________________________

Title:
TC-02-Reject Invalid Credentials
Description:
Ensure system displays error messages for incorrect email/password.
Test Steps:
Step	Action	Expected Result
1	Enter email: wrong@example.com, password: Wrong123.	Error: "Invalid email or password."
2	Submit form.	Form is not submitted.
Test Data:
•	Email: wrong@example.com
•	Password: Wrong123

________________________________________
Title: 
TC-02-Verify Session Storage in localStorage
Description:
Ensure user session is maintained after page refresh.
Test Steps:
Step	Action	Expected Result
1	Log in successfully.	localStorage contains session token.
2	Refresh the page.	User remains logged in.

Title: 
TC-03-Verify Redirect to Intended Page
Description:
Ensure users are redirected to their original requested page after login.
Test Steps:
Step	Action	Expected Result
1	Attempt to access /profile while logged out.	Redirected to login page.
2	Log in successfully.	Redirected to /profile.


Title: 
TC-04-Verify Logout Clears Session
Description:
Ensure logout clears session data and redirects to login page.
Test Steps:
Step	Action	Expected Result
1	Log in successfully.	Session is active.
2	Click "Logout."	localStorage is cleared; redirected to login page.




Title:
 TC-05-Validate Empty Credentials During Login
Description:
Ensure the system displays specific error messages when email or password fields are empty.
Test Steps:
Step	Action	Expected Result
1	Leave both email and password fields empty.	Error: "Email is required." and "Password is required."
2	Enter email only (user@example.com), leave password empty.	Error: "Password is required."
3	Enter password only (Password123), leave email empty.	Error: "Email is required."
4	Click "Login" in all above cases.	Form is not submitted. Cursor focuses on the first empty field.
Pass/Fail Criteria:
•	Pass: Specific error messages appear for empty fields.
•	Fail: Generic error or no validation.
Test Data:
•	Email: [Empty] or user@example.com
•	Password: [Empty] or Password123

________________________________________

Title: 
TC-05-Verify Session Timeout (After Inactivity)
Description:
Ensure the system automatically logs out the user after a period of inactivity (e.g., 30 minutes).
Preconditions:
1.	User is logged in.
2.	Session timeout is set to 30 minutes.
Test Steps:
Step	Action	Expected Result
1	Log in and note the time.	Session starts.
2	Do not interact with the system for 30+ minutes.	System logs out the user automatically.
3	Try to access a protected route (e.g., /profile).	Redirected to login page with message: "Session expired. Please log in again."
4	Check localStorage.	Session token is cleared.
Test Data:
•	Timeout Duration: 30 minutes (adjust if configurable).
Pass/Fail Criteria:
•	Pass: User is logged out after inactivity; session data is cleared.
•	Fail: Session remains active indefinitely.



 Pickup Scheduling Test Cases 
Title:
TC-01-Verify Successful Pickup Scheduling with Required Fields
Description:
Ensure users can schedule a pickup with valid date, waste type, quantity, and address.
Preconditions:
1.	User is logged in.
2.	User profile has a saved address.
Test Steps:
Step	Action	Expected Result
1	Navigate to "Schedule Pickup" page.	Form displays required fields (*).
2	Enter:
- Date: Tomorrow’s date
- Waste Type: Recyclable
- Quantity: Medium
- Address: Auto-filled from profile.	Fields accept input. Address is pre-filled.
3	Click "Submit."	Confirmation message: "Pickup scheduled for [date]."

Test Data:
•	Date: [Tomorrow’s date]
•	Waste Type: Recyclable
•	Quantity: Medium

Pass/Fail Criteria:
•	Pass: Pickup is scheduled; confirmation appears.
•	Fail: Form rejects valid input or fails to submit.
________________________________________

Title:
 TC-02-Reject Pickup Dates <24 Hours in Advance
Description:
Ensure the system blocks scheduling if the date is invalid (today/past).
Preconditions:
1.	User is logged in.
Test Steps:
Step	Action	Expected Result
1	Enter today’s date in the pickup date field.	System shows error: "Date must be at least 24 hours in advance."
2	Attempt to submit.	Form is not submitted.
Test Data:
•	Date: [Today’s date]
Pass/Fail Criteria:
•	Pass: Error message appears; form blocks submission.
•	Fail: Accepts invalid date.


________________________________________
Title:
TC-03-Verify Time Slot Availability
Description:
Ensure the system shows available time slots (e.g., 9 AM–12 PM, 1 PM–4 PM).
Preconditions:
1.	User has selected a valid future date.
Test Steps:
Step	Action	Expected Result
1	Select a valid pickup date.	Time slot dropdown appears with available options.
2	Choose a slot (e.g., "9 AM–12 PM").	Slot is selected.
Test Data:
•	Date: [Tomorrow’s date]
•	Time Slot: 9 AM–12 PM
Pass/Fail Criteria:
•	Pass: Slots are displayed and selectable.
•	Fail: No slots appear or are incorrectly marked "Unavailable."





________________________________________

Title: 
TC-04-Block Multiple Pickups on the Same Date
Description:
Ensure users cannot schedule multiple pickups for the same date.
Preconditions:
1.	User has an existing pickup scheduled for tomorrow.
Test Steps:
Step	Action	Expected Result
1	Attempt to schedule another pickup for the same date.	Error: "Only one pickup per day is allowed."
2	Try to submit.	Form is not submitted.
Test Data:
•	Date: [Existing pickup date]
Pass/Fail Criteria:
•	Pass: System blocks duplicate scheduling.
•	Fail: Allows multiple pickups on the same date.




________________________________________



Request tracking Test Cases 
Title:
 TC-01-Verify Real-Time Status Updates for Pickup Requests
Description:
Ensure the system provides real-time status updates for pickup requests without requiring manual refresh.
Preconditions:
1.	User has submitted a pickup request.
2.	The system has accepted the request.
Test Steps:
Step	Action	Expected Result
1	Log in as a user with an active pickup request.	User dashboard loads successfully.
2	Navigate to "Request Status" page.	Current status (e.g., "Pending") is displayed.
3	Simulate backend status change (e.g., "Pending" → "Assigned").	Status updates automatically in the UI.
Test Data:
•	Pickup Request ID: [Example: PR-1001]
Pass/Fail Criteria:
•	Pass: Status updates in real-time (no manual refresh needed).
•	Fail: Status does not update or requires page refresh.

________________________________________

Title:
TC-02- Verify Notification on Pickup Request Status Change
Description:
Ensure the system sends notifications (in-app/email/SMS) when pickup status changes.
Preconditions:
1.	User has an active pickup request.
2.	Notifications are enabled.
Test Steps:
Step	Action	Expected Result
1	Trigger a status change (e.g., "Assigned" → "In Progress").	System processes the update.
2	Check user’s notification inbox.	Notification appears with updated status.
Test Data:
•	Notification Channel: [Email/App/SMS]
Pass/Fail Criteria:
•	Pass: Notification is received promptly.
•	Fail: No notification or delayed notification.





________________________________________

Title: 
TC-03-Verify Feedback Submission After Pickup Completion
Description:
Ensure users can submit feedback (rating + comments) after pickup is marked "Completed."
Preconditions:
1.	Pickup request status is "Completed."
2.	Feedback option is enabled.
Test Steps:
Step	Action	Expected Result
1	Navigate to "Completed Requests."	List of completed pickups is displayed.
2	Click "Provide Feedback" for a request.	Feedback form opens.
3	Submit feedback (e.g., 5 stars + "Great service!").	Confirmation message appears.
Test Data:
•	Feedback: [Rating: 5, Comment: "Great service!"]
Pass/Fail Criteria:
•	Pass: Feedback is saved and confirmed.
•	Fail: Submission fails or data is not stored.


