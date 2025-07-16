**TEST REPORT**  
**CLEANCITY GROUP PROJECT**  
**Group Name**: Zero-Day Zealots  
**Version**: 1.0  
**Group Members:**

1. Sandra Chelangat \- sandramitei5@gmail.com  
2. Mustafa Ibrahim \-mustibr55@gmail.com  
3. Mpendulo Maduna \- [mpendulodnyawose@gmail.com](mailto:mpendulodnyawose@gmail.com)

**1\. TEST PLAN**

Version 1.0 \-Link to test plan: [https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-plan.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-plan.md)

Version 2.0 \- Link to test plan: [https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-plan-updated.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-plan-updated.md)

**Summary**

The CleanCity platform was tested to ensure functionality, usability, and performance across key areas like dashboard analytics, community features, and admin panel operations.  
 Testing included both manual and exploratory methods, using tools like Jest, Lighthouse, and Chrome DevTools. Major testing focused on dashboard stats, post interactions, user registration, and request management. Non-functional testing addressed performance (page loads), browser compatibility, and UI responsiveness. Key risks identified included late code delivery and browser issues, mitigated by planning and mock tools. Several critical bugs were found, such as weak password enforcement, ID leaks, and insecure data storage. Many features (e.g., real-time updates, blog system) were incomplete or planned for future implementation.  
 Challenges included limited application access and evolving scope, requiring iterative updates to the test plan.

## **🎯 Objectives**

The main objectives are to:

1. Verify accuracy and responsiveness of dashboard statistics and chart visualizations.  
2. Validate functionality and data integrity of leaderboards and gamification features.  
3. Ensure robust functionality for creating, liking, and commenting on blog/community posts.  
4. Confirm correct operation and data persistence of administrative functions.  
5. Identify and log defects and inconsistencies within the specified areas.  
6. Provide early test scripts for both manual and potential automated testing.

# 

# **Scope of Testing**

#### **In-Scope:**

* **Dashboard (/dashboard**)  
1. Display and accuracy of statistics (Total Requests, Missed Pickups, Blog Posts, Community Posts).  
2. “Requests Per Month" bar chart functionality and data representation.  
3. Real-time updates of statistics and charts.  
4. “Top Users (Activity)" leaderboard functionality, sorting, and real-time updates.  
* **Community Feed (/community)**  
1. Creation and display of new community posts.  
2. Liking/unliking posts and accurate reflection of counts.  
3. Adding/displaying comments and toggling comment section visibility.  
* **Admin Panel (/admin)**  
1. Updating pickup request status (e.g., "Mark as Scheduled").  
2. Data persistence of status updates.  
3. Filtering functionality.  
* **Authentication System Testing**  
1. Create functional test cases for user registration  
2. Develop test scenarios for valid registration data

* # **Waste Management Testing**

1. Plan request management and status tracking tests  
2. Test waste pickup scheduling and request management.

* ## **Dashboard & Analytics Testing**

1. Develop test cases for dashboard statistics  
2. Create scenarios for chart visualization functionality  
3. Test dashboard features and analytics.

* # **Content Management Testing**

1. Create test cases for blog articles and comments  
2. Plan admin functionality tests

#### **Out-of-Scope:**

1. Payment integration (not in MVP)  
2. Third-party map-based routing (placeholder APIs used)  
3. Security vulnerability assessments.  
4. Extensive cross-browser and device compatibility testing (focused on core functionality).

**Resources**

# **Tools Used**

1. Jest : For unit testing JavaScript logic  
2. Lighthouse : For performance audits  
3. Chrome DevTools : For debugging, localStorage inspection  
4. Markdown : For documentation (test-cases.md, defect-log.md)  
5. Jira: For tracking the test cases.  
6. Browser Developer Tools for inspection and debugging.

### **Test Environment**

* Application: CleanCity web application (React-based).  
* Deployment: Local development server (npm start).  
* Browser: Modern web browser (e.g., Chrome, Firefox)

**Schedule**

| Task | Start Date | End Date |
| :---- | :---- | :---- |
| **Test Planning** | **June 30** | **July 2** |
| **Test Case Design** | **July 2** | **July 2** |
| **Unit Testing** | **July 3** | **July 4** |
| **Integration Testing** | **July 4** | **July 6** |
| **System Testing** | **July 7** | **July 8** |
| **UAT & Regression** | **July 9** | **July 11** |
| **Test Closure** | **July 12** | **July 13** |
| **Bug Fixing & Retesting** | **July 13** | **July 14** |
| **Report Creation and Submission** | **July 14** | **July 16** |

**2\. Test Strategy**  
A combination of manual and exploratory testing will be used, with an emphasis on functional verification and data integrity. The approach includes:

1. Understanding functionality.  
2. Drafting test cases.  
3. Developing test scripts.  
4. Logging defects.  
5. Documenting challenges.

**Tests  done:**

1. Smoke Testing – Initial check to determine if a build is testable  
2. Sanity Testing – Quick evaluation of fixes or minor changes  
3. Functional Testing – Based on user stories and requirements  
4. Regression Testing – Ensure no impact from new code  
5. Exploratory Testing – Expert-driven tests based on experience  
6. End-to-End Testing – Simulate real user workflows  
7. UI/UX and Usability Testing

**3\. Risk Analysis**  
**888888888888**  
**Risk Assessment and Mitigation**

1. Risk: Late code delivery → Mitigation: Parallel test planning, buffer in schedule.  
2. Risk: Lack of test data → Mitigation: Create mock data generator scripts.  
3. Risk: Browser compatibility issues → Mitigation: Use BrowserStack for cross-browser testing.

**4\. Traceability Matrix**

**88888888888888888**

**5\. Test Cases**

**Community Features Testing** focuses on user-facing functionalities such as user profiles (login, registration, admin badge, logout) and social interactions (feedback submission and validation), noting that **blog and community feed systems are not yet implemented.**

**Admin Functions Testing** covers the backend administration panel, including updating request statuses, observing stat refreshes, and managing update button states. It also outlines future test cases for **leaderboards and gamification features**, which are not yet implemented.

**Non-Functional Testing** addresses critical performance aspects like **page load times** (using Lighthouse metrics for FCP, TTI, LCP, and Fully Loaded Time) and **browser compatibility** (responsive layout, consistent form submission, mobile admin UI, date input). **Real-time data updates** are also planned for future testing.

While key areas are covered, more detailed information about the specific test cases can be found in the provided link: [https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-cases.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/test-cases.md)

**6\. Test Execution Summary**  
[https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Registration test summary.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Registration test summary.md)  
[https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Login test test summary.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Login test test summary.md)  
[https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Home test summary.md](https://github.com/Daskii/CleanCity-G19/blob/main/src/tests/Home test summary.md)  


**7\. Bug Report**

# **CleanCity \- Defect Log**

| Issue ID | Title | Description | Priority | Status | Found On |
| ----- | ----- | ----- | ----- | ----- | ----- |
| BUG\_001 | Incorrect Location Filter | Eldoret filter returns Nairobi requests | High | Open | Dashboard |
| BUG\_002 | Missing Comment Validation | Feedback form allows empty comments | Medium | Open | Feedback |
| BUG\_003 | Weak Password Requirements | Registration accepts 3-character passwords | High | Open | Registration |
| BUG\_004 | Plain Text Password Storage | Passwords stored unencrypted in localStorage | Critical | Open | Auth |
| BUG\_005 | Admin Can Edit/Delete Any User | No auth checks in updateUser/deleteUser | High | Open | Admin Panel |
| BUG\_006 | Name Validation Too Lenient | Allows names with only 2 characters | Low | Open | Registration |
| BUG\_007 | Preferred Date Not Required | Pickup request can be submitted without date | Medium | Open | Home Page |
| BUG\_008 | Admin Badge Visibility Bug | Sometimes hidden after login | Medium | Open | Navbar |
| BUG\_009 | ID Enumeration Vulnerability | getUserById() leaks info | Medium | Open | User Management |
| BUG\_010 | Insecure Direct Object Reference | Any user can view/edit any request | Critical | Open | Admin Panel |
| BUG\_011 | Weak Authentication | No hashing/session tokens | High | Open | Auth |
| BUG\_012 | CSRF Vulnerability | Forms can be submitted from external sites | Medium | Open | Form Handling |
| BUG\_013 | No Real-Time Updates | No WebSocket/polling support | Medium | Planned | Future |
| BUG\_014 | Blog/Community Feed Missing | Features not implemented | Low | Planned | Future |
| BUG\_015 | 88888 | 888 | 88888 | 88888 | 88888 |

**8\. Conclusion and Reflection**

# **Challenges Encountered**

* Limited Direct Access to Application: Reliance on code analysis and existing documentation due to sandboxed environment limitations for interactive testing.  
* Real-time Data Updates and Persistence: Challenges in verifying dynamic behaviors without a running browser instance, mitigated by mocking localStorage in unit tests.  
* Scope Definition and Focus: Initial broad scope required re-evaluation and a more targeted approach, leading to updated test plan and cases.

# 8888888

**Checklist**

888888888

**Related links**

Video \-  88888

Github link \- [https://github.com/Daskii/CleanCity-G19.git](https://github.com/Daskii/CleanCity-G19.git)

