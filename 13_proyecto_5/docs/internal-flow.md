# Technical Documentation of Internal Flows – Simulated Banking App

## 1. Technologies and Architecture

- **Language:** TypeScript
- **Framework:** Vite
- **Styles:** CSS
- **App type:** SPA (Single Page Application) without routes
- **Backend:** No backend. All logic and data are simulated in the frontend
- **Persistence:** No local storage is used. Everything is lost on reload
- **Libraries used:**
  - Library for generating random images
  - `locale-currency` to detect user's currency and location
  - External Frankfurter API for currency conversion

---

## 2. General App Structure

- **Global state:** managed via a context or centralized state, with
  `currentUser`, `users`, `transactions`, etc.
- **Simulated loading:** uses `setTimeout` and a `Loader` component to emulate
  server calls
- **Navigation:** No routes are used; the global state is updated to render
  different views (Login, Home, Transfer, etc.)

---

## 3. Internal Flows by Page / Feature

### 3.1 InfoPage

- Displays a list of 3 test users, retrieved from an internal data object.
- Each user includes name and password.
- "Close" button changes the state to display the `LoginPage`.

### 3.2 LoginPage

- Inputs: `username`, `password`
- On `Login` click:
  - Calls `login()` (`src/app/login.ts`)
  - If fields are empty: shows validation errors
  - If filled: looks for exact match in user list
  - If match found: sets `currentUser`, redirects to `Homepage`
  - If no match: shows error and stays on LoginPage

### 3.3 SignUpPage

- Inputs: first name, last name, 4-digit password
- On `Create` click:
  - Calls `signup()` (`src/app/signup.ts`)
  - Validates fields and password format
  - Generates `username` using `generateUsername()`
  - Creates a new user:
    - `generateCreditCardNumber()`
    - `generateCVV()`
    - `getUserCurrency()` and `getUserLocale()` using `locale-currency`
    - Assigns 10,000 initial credits as a transaction with `toISOString()` date
  - Shows success message and redirects to `InfoPage`

### 3.4 Homepage

- Shows credit card with masked data using `utils/maskCardNumber`
- Simulated loading with `setTimeout`
- Buttons redirect to features:
  - User
  - Transfer
  - Loan
  - Transactions
  - Pay Bill

### 3.5 User Page

- Retrieves `currentUser` data
- Full card is displayed
- Displays personal details: first name, last name, password, currency,
  location, random image

### 3.6 Transfer Page

- Displays current balance using `utils/getTransactionTotals`
- Shows currency symbol with `utils/getCurrencySymbol`
- List of possible recipients is auto-generated
- On `Send` click:
  - Calls `transferMoney()` (`src/app/transferMoney.ts`)
  - Validates inputs
  - Checks if currencies differ:
    - If yes: uses `utils/convertCurrency()` which calls Frankfurter API
  - Deducts money from current user, adds negative transaction
  - Adds money to recipient, adds positive transaction
  - Shows success message and redirects to `Transactions`

### 3.7 Loan Page

- Input range for amount + selector for terms (12, 24, 36 months)
- `Calculate` button triggers calculations:
  - `services/LoanFunctionality` computes:
    - Total to repay
    - Monthly payment
    - Interest based on term
- `Apply` button:
  - Calls `applyLoan()` (`src/app/apply.ts`)
  - Uses `utils/getLoanDetails()` + `getCurrencySymbol()`
  - Adds a positive transaction with `loan` category
  - Shows success message and redirects to `Transactions`

### 3.8 Transactions Page

- List of all user's transactions
- Uses `utils/getTransactionTotals()` to calculate:
  - Total income
  - Total expenses
  - Available balance
- Sorting: by date, positive/negative
- Each transaction includes an icon by category using `utils/getIcon`

### 3.9 Pay Bill Page

- Form: category + amount
- On `Pay` click:
  - Calls `payBills()` (`src/app/payBills.ts`)
  - Validates inputs and available balance
  - If insufficient balance: shows error
  - If valid:
    - Adds new negative transaction
    - Shows success message and redirects to `Transactions`

### 3.10 Logout

- Button is present on all pages
- On click:
  - Calls `logout()` (`src/app/logout.ts`)
  - Sets `currentUser` to `null`
  - Shows logout message
  - Redirects to `LoginPage`

---

## 4. Technical Notes

- All behavior is simulated on the frontend
- Navigation is handled through state, not routes
- Utility functions are used for formatting, calculations, and data simulation
- No persistence: reloading the app resets all data
- Best practices for modularity and separation of concerns have been applied
