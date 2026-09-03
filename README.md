# AdminHub

## Updates Since Tuesday

This update includes the latest improvements made to the AdminHub project after the Tuesday commit.

## User Management

- Added pagination with 5 users per page
- Added role-based filtering
- Added status-based filtering
- Added combined search and filtering
- Added filter reset functionality
- Added automatic pagination reset when search or filters change
- Added user form validation
- Added required field validation for name and email
- Added minimum name length validation
- Added email format validation
- Added duplicate email validation
- Added loading states for user operations
- Added API error states
- Added retry functionality for failed user loading
- Added success and failure toast notifications
- Improved responsive user table layout
- Added accessible user action menus
- Added accessible pagination controls

## State Management

- Added Zustand for centralized user state management
- Added persistent user state using Zustand persistence
- Connected the Dashboard to the shared user store
- Connected Quick Overview to the shared user store
- Centralized user fetch, create, update, and delete operations
- User changes now persist after page refresh

## API Integration

- Added environment variable support for the API URL
- Added `.env` configuration using `VITE_API_URL`
- Updated the API service to use the configured environment variable
- Added error handling for GET requests
- Added error handling for POST requests
- Added error handling for PUT requests
- Added error handling for DELETE requests

## Profile

- Added profile persistence using localStorage
- Profile changes now remain after page refresh
- Added persistence for:
  - Name
  - Email
  - Phone
  - Location

## Settings

- Added settings persistence using localStorage
- Application settings now remain after page refresh
- Added persistence for:
  - Application name
  - Language
  - Timezone
  - Two-factor authentication
  - Email notifications
  - System notifications
  - Security alerts

## Validation and Error Handling

- Added client-side validation for user forms
- Added duplicate email detection
- Added API failure handling
- Added loading feedback during API operations
- Added retry functionality
- Added empty search/filter results state
- Added success and failure feedback through toast notifications

## Environment Configuration

The API URL is now configurable through an environment variable.

Create a `.env` file in the project root:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
