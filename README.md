# Wild Oasis

## Features

- Authentication
- Cabins
- Bookings
- Check In / Check Out
- Guests
- Dashboard
- Settings

## Necessary Pages

- **Dashboard** — `/dashboard`
- **Bookings** — `/bookings`
- **Cabins** — `/cabins`
- **Booking Check-In** — `/checkin/:bookingId`
- **Settings** — `/settings`
- **User Sign Up** — `/users`
- **Login** — `/login`
- **Account Settings** — `/account`

## Technology Decision

- **Routing**: React Router
- **Styling**: Styled Components
- **Remote State Management**: React Query
- **UI State Management**: Context API
- **Form Management**: React Hook Form
- **Other tools** : React icons/ React hot toast/ Reacharts/date-fns/Superbase

## Useful Commands

### Install ESLint and Plugins

````sh
## Commands Used So Far

```sh
# Install dependencies (if not already done)
npm install

# Install ESLint and related plugins
npm install --save-dev eslint vite-plugin-eslint eslint-config-react-app

# Install Styled component
npm install styled-components

# Install react icons
npm i react-icons
# React query
npm i @tanstack/react-query@4

# date function
npm i date-fns
````

# Start the development server

````

### Install React Router DOM

```sh
npm install react-router-dom@latest
````

### Usage

- Add `vite-plugin-eslint` to your `vite.config.js` plugins array for linting during development.
- Use `eslint-config-react-app` in your ESLint config for recommended React rules.

### Tabbles

-Bookings
-Cabins
-Guests
-Settings
-Users
