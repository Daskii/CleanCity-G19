## Introduction
This comprehensive report consolidates the test plan, detailed test cases, an initial defect log, and documentation of challenges and changes for the CleanCity web application. The primary focus of this testing effort is on the following areas:
- **Dashboard & Analytics**
- **Content Management (Community Feed)**
- **Admin Functionality**


## 1. Test Plan and Strategy

### 1.1 Test Objectives
The main objectives are to:
- Verify accuracy and responsiveness of dashboard statistics and chart visualizations.
- Validate functionality and data integrity of leaderboards and gamification features.
- Ensure robust functionality for creating, liking, and commenting on blog/community posts.
- Confirm correct operation and data persistence of administrative functions.
- Identify and log defects and inconsistencies within the specified areas.
- Provide early test scripts for both manual and potential automated testing.

### 1.2 Scope of Testing
#### In-Scope:
- **Dashboard (/dashboard):**
  - Display and accuracy of statistics (Total Requests, Missed Pickups, Blog Posts, Community Posts).
  - "Requests Per Month" bar chart functionality and data representation.
  - Real-time updates of statistics and charts.
  - "Top Users (Activity)" leaderboard functionality, sorting, and real-time updates.
- **Community Feed (/community):**
  - Creation and display of new community posts.
  - Liking/unliking posts and accurate reflection of counts.
  - Adding/displaying comments and toggling comment section visibility.
- **Admin Panel (/admin):**
  - Updating pickup request status (e.g., "Mark as Scheduled").
  - Data persistence of status updates.
  - Filtering functionality.

#### Out-of-Scope:
- Comprehensive end-to-end testing of all application features (e.g., Home Page form validation, Feedback page).
- Performance testing beyond basic page load observations.
- Security vulnerability assessments.
- Extensive cross-browser and device compatibility testing (focused on core functionality).

### 1.3 Test Strategy
A combination of manual and exploratory testing will be used, with an emphasis on functional verification and data integrity. The approach includes:
- Understanding functionality.
- Drafting test cases.
- Developing test scripts.
- Logging defects.
- Documenting challenges.

#### Test Types:
- Functional Testing
- Data Integrity Testing
- UI/UX Testing
- Regression Testing

### 1.4 Test Environment
- **Application:** CleanCity web application (React-based).
- **Deployment:** Local development server (`npm start`).
- **Browser:** Modern web browser (e.g., Chrome, Firefox).
- **Tools:** Browser Developer Tools for inspection and debugging.


## 2. Test Cases and Checklists

### 2.1 Dashboard Statistics & Chart Visualization (/dashboard)
- **Dashboard Statistics Display:**
  - **TC-01:** Verify accurate display of Total Requests, Missed Pickups, Blog Posts, and Community Posts counts.
- **Chart Visualization (Requests Per Month):**
  - **TC-02:** Verify correct rendering of the bar chart with data.
  - **TC-03:** Verify dynamic updates of the chart with new data (real-time data updates).
  - **TC-04:** Verify chart behavior when no data is present.

### 2.2 Leaderboards and Gamification (/dashboard)
- **Top Users (Activity) Leaderboard:**
  - **TC-05:** Verify correct display of the leaderboard based on user activity.
  - **TC-06:** Verify dynamic updates of the leaderboard with new user activity (real-time data updates).
  - **TC-07:** Verify leaderboard behavior when no user activity is recorded.

### 2.3 Blog Articles and Comments (Community Feed) (/community)
- **Post Creation:**
  - **TC-08:** Verify successful creation of new community posts with valid content.
  - **TC-09:** Verify prevention of creating empty community posts.
- **Liking Posts:**
  - **TC-10:** Verify ability to like and unlike a community post, with accurate count updates.
- **Commenting on Posts:**
  - **TC-11:** Verify ability to add comments to posts.
  - **TC-12:** Verify prevention of adding empty comments.
  - **TC-13:** Verify correct toggling of comment section visibility.

### 2.4 Admin Functionality (/admin)
- **Request Management:**
  - **TC-14:** Verify immediate UI update when marking a request as "Scheduled".
  - **TC-15:** Verify data persistence of status updates after page refresh.
  - **TC-16:** Verify correct filtering of requests in the Admin Panel.


## 3. Initial Defect/Issue Log
### Summary of Identified Defects:
- **DEFECT-001 (Home Page - Form Validation):** Date field doesn't show validation error.
- **DEFECT-002 (Dashboard - Filtering Functionality):** Filtering by "Eldoret" shows "Nairobi" requests.
- **DEFECT-003 (Awareness Page - Accessibility):** Missing alt-text on all images.
- **DEFECT-004 (Admin Panel - UI State Update & Data Persistence):** UI doesn't refresh immediately after status update, and persistence needs localStorage check.
- **DEFECT-005 (Home Page - Form Boundary Testing):** Long text in form fields may cause layout issues.


## 4. Challenges and Changes

### 4.1 Challenges Encountered
- **Limited Direct Access to Application:** Reliance on code analysis and existing documentation due to sandboxed environment limitations for interactive testing.
- **Real-time Data Updates and Persistence:** Challenges in verifying dynamic behaviors without a running browser instance, mitigated by mocking localStorage in unit tests.
- **Scope Definition and Focus:** Initial broad scope required re-evaluation and a more targeted approach, leading to updated test plan and cases.


