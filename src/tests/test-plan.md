#### GROUP NAME: ZERO-DAY ZEALOTS 
### PHASE 1 SUBMISSION
#### Test Plan – Clean City Project
---
## 1.Group Members 
1. Sandra Chelangat - sandramitei5@gmail.com
2. Mustafa Ibrahim -mustibr55@gmail.com
3. Mpendulo Maduna - mpendulodnyawose@gmail.com

---

## 2.Objective 
The objective of this test plan is to ensure that the Clean City waste management platform meets all the defined functional and non-functional requirements. It should be secure, performance, and user-friendly across supported devices and environments. The system will be validated under normal and peak load conditions.

---

## 3.Scope 
The scope of this test plan includes the following:
1. User registration, authentication, and role management
2. Garbage pickup scheduling and confirmation
3. Admin dashboard analytics and control
4. Complaint submission and notification system
5. System response performance

---

## 4.Inclusions 
1. Test strategy document
2. Test case specification and design documents
3. Execution reports
4. Defect tracking reports
5. Performance test results

---

## 5. Test Environments
Testing will be conducted in the following environments:
1. Development environment – local test servers
2. QA/Staging environment – pre-production hosted build
3. UAT environment – for user acceptance testing
4. Production environment – final validation (smoke only)


## Target Platforms:
1. Windows 10 – Chrome, Firefox, Edge
2. Android OS – Chrome

---

## 6. Defect Reporting Procedure
Defects will be logged in JIRA using a standard template with detailed reproduction steps and screenshots. Defects will be triaged daily and prioritized based on severity. The QA team will provide daily status reports to the development lead.

## 7. Test Strategy
1. Smoke Testing – Initial check to determine if a build is testable
2. Sanity Testing – Quick evaluation of fixes or minor changes
3. Functional Testing – Based on user stories and requirements
4. Regression Testing – Ensure no impact from new code
5. Exploratory Testing – Expert-driven tests based on experience
6. End-to-End Testing – Simulate real user workflows
7. UI/UX and Usability Testing

---

## 8. Test Schedule
| Task	|          Start Date	    |              End Date |
| Test Planning  | June 30	           |  July 2 |
| Test Case Design	| July 2	         | July 2 |
| Unit Testing | 	July 3       | 	July 4 |
| Integration Testing | 	July 4   	| July 6
| System Testing	| July 7    | 	July 8
| UAT & Regression | 	July 9  	| July 11 | 
| Test Closure	| July 12	  | July 13    |
|Bug Fixing & Retesting  |	  July 13 |	  July 14 |
| Report Creation and Submission |	July 14 	July 16 |

---

## 9. Entry and Exit Criteria
# Entry Criteria:
1. Requirements and design documents are finalized and shared
2. Stable build is deployed to test environment
3. Test cases are reviewed and signed off

# Exit Criteria:
1. All high and critical bugs resolved or accepted
2. Test execution completed with 95% pass rate
3. Test summary report prepared and approved by stakeholders

---

## 10. Tools
1. JIRA – Bug and task tracking
2. BrowserStack – Cross-browser/device testing
3. Jest – Unit and regression testing
4. Selenium – UI test automation
5. Postman – API testing
6. Excel/Word – Test case documentation and reporting

---

## 11. Risks and Mitigation
1. Risk: Delay in build delivery → Mitigation: Add buffer time in schedule
2. Risk: Test data issues → Mitigation: Use mock data generators
3. Risk: Environment instability → Mitigation: Backup staging environment

---

## 12. Approvals
All documents including Test Plan, Test Cases, and Summary Reports will be reviewed and approved by the QA Lead and Project Stakeholders before moving to the next testing phase.

---

# Test Strategy – Clean City Project
---

 ## Introduction
This Test Strategy document outlines the testing approach for the Clean City project, a waste management platform aimed at optimizing scheduling, reporting, and performance monitoring of garbage collection services. The objective is to ensure the system meets both functional and non-functional requirements before deployment.

---

## Test Objectives
1. Verify core functionalities such as waste scheduling, user reporting, and admin dashboards.
2. Ensure compatibility across major browsers and mobile devices.
3. Validate performance under expected and peak user loads.

---

## Scope of Testing

## In-scope:
1. User registration, login, and authentication
2. Waste pickup scheduling
3. Admin dashboard and analytics
4. Public complaint reporting
5. Notification and alert system

## Out-of-scope:
1. Payment integration (not in MVP)
2. Third-party map-based routing (placeholder APIs used)

---

## Test Levels
1. Unit Testing – Performed by developers using Jest or similar.
2. Integration Testing – Verifying interfaces between modules (e.g., frontend-backend, user-API).
3. System Testing – End-to-end tests covering full user workflows.
4. Acceptance Testing – Final verification based on stakeholder requirements.
5. Regression Testing – Ensuring new code does not break existing features.

---

## Test Techniques
1. Black Box Testing: System, acceptance, and regression levels.
2. Decision Table Testing: For schedule validations and reporting logic.
3. Boundary Value Analysis: Waste capacity limits, location inputs.
4. Exploratory Testing: On UI/UX flows and dashboard usage.

---

## Test Environment
## Hardware:
1. Minimum: 4-core CPU, 8GB RAM (for testers)
2. Server: 8-core, 32GB RAM, SSD

## Software:
1. Backend: Node.js, Express.js
2. Frontend: React.js
3. Database: PostgreSQL
4. Test Framework: Jest, Selenium

## Network:
1. Stable connection with minimum 10 Mbps for remote testing
2. Localhost and deployed environments (e.g., AWS)

##  Devices/Browsers:
1. Chrome (latest 2 versions)
2. Firefox (latest 2 versions)
3. Safari (latest 2 versions)
4. Edge (latest 2 versions)
5. Android and iOS devices

---

## Test Deliverables
1. Test Plan Document
2. Test Cases and Checklists
3. Bug Reports (GitHub Issues)
4. Test Summary Report
5. Automation Scripts (if any)

---

## Resource Planning
1. QA Engineer: Writes test cases, executes manual testing (2 resources). All members will participate.
2. Automation Engineer: Builds Selenium/Jest scripts (1 resource). All members will participate.
3. Project Manager: Oversees schedule and progress (1 resource). Group leader will guide the team.

---

## Risk Assessment and Mitigation
1. Risk: Late code delivery → Mitigation: Parallel test planning, buffer in schedule.
2. Risk: Lack of test data → Mitigation: Create mock data generator scripts.
3. Risk: Browser compatibility issues → Mitigation: Use BrowserStack for cross-browser testing.

---

## Test Exit Criteria
1. All high and critical bugs are resolved or accepted.
2. 95% of planned test cases executed and passed.
3. Regression suite shows no breakage.
4. UAT sign-off team members.

---

## Test Metrics and Reporting
1. KPI 1: Test case execution rate
2. KPI 2: Defect density per module
3. KPI 3: Pass/fail rate by severity

# Reporting Structure:
1. Frequency: Weekly status reports
2. Format: PDF/Markdown + GitHub Issue links
3. Recipients: Team members and Instructor

---

# Team Member Roles and Responsibilities
---

## Objectives of this document:
This document outlines the roles and responsibilities of the team members. 
In the first phase, our primary objective is to establish the project structure and repository. We will utilize Jira for project management, so our first task in week one will be setting up Jira with epics, user stories, tasks, and bug templates.

---

## Group members:
1. Group Leader:  Sandra
2. Team Member 1:  Mustafa
3. Team Member 2:  Mpendulo

---

## Epic
An Epic is like a big goal or feature. It’s too large to complete in a single sprint, so it’s divided into user stories or tasks that are more manageable.

 ---

## Tasks
Each task will be assigned to the respective team member based on their epic ownership. Tasks will include detailed descriptions and acceptance criteria.

---

## Bugs
Any bugs discovered during early planning or setup will be logged as Bug issues in Jira. Bugs will include all required fields: Summary, Description, Environment, Severity, Priority, Steps to Reproduce, Expected vs Actual, Attachments.

---

# Group Leader 
##  Project Management Setup
1. Verify Jira account creation for all team members
2. Confirm project setup with correct name (CleanCity QA Testing) and key (CLEANCITY)
3. Ensure all team members are added to the project
4. Define QA roles within the team
5. Document responsibilities for each role
6. Create a communication plan for team coordination
7. Define overall testing objectives and scope
8. Identify test environments and tools needed
9. Configure Jira and define project structure

---

# Team Member 1
## Jira Project Configuration
1. Create Epics from 1 to 7.
2. stories and tasks under each epic.
3. Create a bug template 

---

# Team Member 2 
1. Initialize the repository in GitHub with the project structure.
2. Create the folder (tests) in the root of the repository (tests/test-plan.md)

---

# Test tasks and other responsibilities

---
# Group Leader 
# Epic: Community features testing
## Tasks:
1. Test blog system and community feed functionalities.
2. User profile functionality testing
3. Social features interaction testing

# Epic: Admin functions testing
1. Admin panel functionality
2. Design test cases for leaderboards and gamification features

# Epic: Non-functional testing
1. Page load performance testing
2. Browse compatibility testing
3. Plan real-time data updates testing
---

# Team Member 1
# Epic: Authentication System Testing
## Tasks:
1. Create functional test cases for user registration
2. Develop test scenarios for valid registration data


# Epic: Waste Management Testing
## Tasks:
1. Draft test cases for waste pickup scheduling
2. Plan request management and status tracking tests
3. Test waste pickup scheduling and request management.

---

# Team Member 2 
## Epic: Dashboard & Analytics Testing
## Tasks:
1. Develop test cases for dashboard statistics
2. Create scenarios for chart visualization functionality
3. Test dashboard features and analytics.

# Epic: Content Management Testing
## Tasks:
1. Create test cases for blog articles and comments
2. Plan admin functionality tests

---

# Deliverables for Week 1

## Repository Initialization:
1. Repository initialized with proper folder structure.
2. The tests folder was created.

## Test Plan Documentation:
1. Initial test plan and strategy documented (tests/test-plan.md).
2. Roles and Responsibilities

## Jira Setup:
1. Epics, stories, and tasks created in Jira.
2. Custom fields configured (Environment, Severity, etc.).

---
