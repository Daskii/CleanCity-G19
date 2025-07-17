# CleanCity - Defect Log

| Issue ID | Title | Description | Priority | Status | Found On |
|----------|-------|-------------|----------|--------|----------|
| BUG_001 | Incorrect Location Filter | Eldoret filter returns Nairobi requests | High | Open | Dashboard |
| BUG_002 | Missing Comment Validation | Feedback form allows empty comments | Medium | Open | Feedback |
| BUG_003 | Weak Password Requirements | Registration accepts 3-character passwords | High | Open | Registration |
| BUG_004 | Plain Text Password Storage | Passwords stored unencrypted in localStorage | Critical | Open | Auth |
| BUG_005 | Admin Can Edit/Delete Any User | No auth checks in updateUser/deleteUser | High | Open | Admin Panel |
| BUG_006 | Name Validation Too Lenient | Allows names with only 2 characters | Low | Open | Registration |
| BUG_007 | Preferred Date Not Required | Pickup request can be submitted without date | Medium | Open | Home Page |
| BUG_008 | Admin Badge Visibility Bug | Sometimes hidden after login | Medium | Open | Navbar |
| BUG_009 | ID Enumeration Vulnerability | getUserById() leaks info | Medium | Open | User Management |
| BUG_010 | Insecure Direct Object Reference | Any user can view/edit any request | Critical | Open | Admin Panel |
| BUG_011 | Weak Authentication | No hashing/session tokens | High | Open | Auth |
| BUG_012 | CSRF Vulnerability | Forms can be submitted from external sites | Medium | Open | Form Handling |
| BUG_013 | No Real-Time Updates | No WebSocket/polling support | Medium | Planned | Future |
| BUG_014 | Blog/Community Feed Missing | Features not implemented | Low | Planned | Future |