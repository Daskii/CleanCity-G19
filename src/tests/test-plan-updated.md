
# Updated Test Plan and Strategy
### GROUP NAME: ZERO-DAY ZEALOTS 
## PHASE 2 SUBMISSION

---
## 1.Group Members 
1. Sandra Chelangat - sandramitei5@gmail.com
2. Mustafa Ibrahim -mustibr55@gmail.com
3. Mpendulo Maduna - mpendulodnyawose@gmail.com

## 🎯 Objective
The purpose of this updated test plan is to document the progress made so far in the Clean City waste management platform. Also,to ensure that the CleanCity web application functions correctly, securely, and performs well across browsers and devices.

### Test Objectives
The main objectives are to:
1. Verify accuracy and responsiveness of dashboard statistics and chart visualizations.
2. Validate functionality and data integrity of leaderboards and gamification features.
3. Ensure robust functionality for creating, liking, and commenting on blog/community posts.
4. Confirm correct operation and data persistence of administrative functions.
5. Identify and log defects and inconsistencies within the specified areas.
6. Provide early test scripts for both manual and potential automated testing.

# Scope of Testing

#### In-Scope:
- **Dashboard (/dashboard):**
  1. Display and accuracy of statistics (Total Requests, Missed Pickups, Blog Posts, Community Posts).
  2. "Requests Per Month" bar chart functionality and data representation.
  3. Real-time updates of statistics and charts.
  4. "Top Users (Activity)" leaderboard functionality, sorting, and real-time updates.
- **Community Feed (/community):**
  1. Creation and display of new community posts.
  2. Liking/unliking posts and accurate reflection of counts.
  3. Adding/displaying comments and toggling comment section visibility.
- **Admin Panel (/admin):**
  1. Updating pickup request status (e.g., "Mark as Scheduled").
  2. Data persistence of status updates.
  3. Filtering functionality.

#### Out-of-Scope:
1. Comprehensive end-to-end testing of all application features (e.g., Home Page form validation, Feedback page).
2. Performance testing beyond basic page load observations.
3. Security vulnerability assessments.
4. Extensive cross-browser and device compatibility testing (focused on core functionality).


## Area - Description
1. User Authentication - Login, registration, session management
2. Form Validation - Pickup request, feedback, registration
3. Dashboard Filtering - Status/location-based filtering
4. Admin Panel Functionality - Request status updates, statistics display
5. UI/UX - Responsive design, accessibility, error/success messages
6. Security Vulnerabilities - Plain text passwords, ID enumeration, weak validation
7. Non-Functional - Performance, browser compatibility
8. Dashboard & Analytics**
9. Content Management (Community Feed)
10. Admin Functionality

## Epic: Authentication System Testing
### Tasks:
1. Create functional test cases for user registration
2. Develop test scenarios for valid registration data

## Epic: Waste Management Testing
### Tasks:
1. Draft test cases for waste pickup scheduling
2. Plan request management and status tracking tests
3. Test waste pickup scheduling and request management.

-Early manual test scripts for the Authentication system and waste management epics. 

##  Approach

## Type           |    Tool                         | Purpose
1. Manual Testing | Browser DevTools                 |     Functional testing, UI checks
2. Unit Testing |         Jest                     |       Logic validation in  dataService
3. Exploratory Testing | Chrome/Firefox | Edge cases, security flaws
4. Performance Testing | Lighthouse    | Load times, metrics
5. Compatibility Testing | Cross-browser tools | Ensuring consistent behavior
#### More Test Types:
- Functional Testing
- Data Integrity Testing
- UI/UX Testing
- Regression Testing

# 🛠️ Tools Used
1. Jest : For unit testing JavaScript logic
2. Lighthouse : For performance audits
3. Chrome DevTools : For debugging, localStorage inspection
4. Markdown : For documentation (test-cases.md, defect-log.md)
5. Jira: For tracking the test cases. 
6. Browser Developer Tools for inspection and debugging.

### Test Environment
- **Application:** CleanCity web application (React-based).
- **Deployment:** Local development server (`npm start`).
- **Browser:** Modern web browser (e.g., Chrome, Firefox).


# Entry Criteria
1. HTML/CSS/JS files are accessible locally
2. App runs in browser
3. Demo credentials are known

# ✅ Exit Criteria
1. All test cases executed
2. Critical bugs resolved or documented
3. Test results and defect logs completed

# Test Strategy
A combination of manual and exploratory testing will be used, with an emphasis on functional verification and data integrity. The approach includes:
1. Understanding functionality.
2. Drafting test cases.
3. Developing test scripts.
4. Logging defects.
5. Documenting challenges.


##  Initial Defect/Issue Log
### Summary of Identified Defects:
- **DEFECT-001 (Home Page - Form Validation):** Date field doesn't show validation error.
- **DEFECT-002 (Dashboard - Filtering Functionality):** Filtering by "Eldoret" shows "Nairobi" requests.
- **DEFECT-003 (Awareness Page - Accessibility):** Missing alt-text on all images.
- **DEFECT-004 (Admin Panel - UI State Update & Data Persistence):** UI doesn't refresh immediately after status update, and persistence needs localStorage check.
- **DEFECT-005 (Home Page - Form Boundary Testing):** Long text in form fields may cause layout issues.


# Challenges and Changes

### Challenges Encountered
- **Limited Direct Access to Application:** Reliance on code analysis and existing documentation due to sandboxed environment limitations for interactive testing.
- **Real-time Data Updates and Persistence:** Challenges in verifying dynamic behaviors without a running browser instance, mitigated by mocking localStorage in unit tests.
- **Scope Definition and Focus:** Initial broad scope required re-evaluation and a more targeted approach, leading to updated test plan and cases.


## Test Deliverables
1. Updated Test Plan Document
2. Test Cases 
3. Manual Test Scripts 