Here's a concise summary of the `Login.test.js` file:

### **Login Component Test Summary**

#### **Objective**  
Tests the Login component's functionality, including form validation, authentication, and navigation.

#### **Key Features Tested**  
1. **Form Rendering**  
   - Verifies all form elements (email, password, login button) render correctly.  
   - Checks auto-focus on the email input.  

2. **Validation & Error Handling**  
   - Ensures error messages appear when submitting empty fields.  

3. **Authentication Flow**  
   - Tests successful login with valid credentials.  
   - Mocks `authService` to simulate API calls.  

4. **Navigation & Redirects**  
   - Confirms redirect to `/profile` after login.  
   - Checks immediate redirect if the user is already logged in.  

5. **Mocking Dependencies**  
   - Mocks:  
     - `authService` (login, user session).  
     - `react-router-dom` (navigation hooks).  

#### **Test Cases**  
| Test Case | Description | Verification |  
|-----------|-------------|--------------|  
| `renders login form` | Checks UI elements | All fields + button exist |  
| `auto-focus on email` | UX validation | Email input has focus |  
| `empty form submission` | Error handling | Shows error alert |  
| `valid login` | Authentication | Calls `authLogin` + redirects |  
| `redirect if logged in` | Session management | Skips login if user exists |  

#### **Tools Used**  
- **Testing Library** for DOM queries and events.  
- **Jest Mocks** for isolating dependencies (auth, routing).  

#### **Best Practices**  
✅ Clean mocks after each test (`afterEach`).  
✅ Test both happy and error paths.  
✅ Verify mocked function calls (`authLogin`, `navigate`).  

This suite ensures the Login component works as expected in all critical scenarios. 🚀
