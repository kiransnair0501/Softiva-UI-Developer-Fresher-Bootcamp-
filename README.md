# Expense Tracker

A clean and responsive **Expense Tracker** built with **React, TypeScript, and CSS**. The application allows users to add, edit, delete, search, and filter expenses while providing a simple overview of their spending.

## Features

* **Add Expenses**

  * Enter expense name
  * Enter amount
  * Select a category
  * Select a date

* **Edit Expenses**

  * Update existing expense details
  * Cancel editing when needed

* **Delete Expenses**

  * Remove individual expenses from the list

* **Search**

  * Search expenses by name

* **Category Filtering**

  * Food
  * Transport
  * Shopping
  * Entertainment
  * Bills
  * Other

* **Monthly Filtering**

  * Filter expenses based on the month they were recorded

* **Expense Summary**

  * Displays total spending
  * Displays total number of expenses

* **3D Category Icons**

  * Custom icons are used for the main expense categories

* **Responsive UI**

  * Designed to work across desktop, tablet, and mobile screen sizes

* **Custom Background**

  * Uses `background3.jpg` as the application's visual background

---

## Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **HTML**

---

## Project Structure

```text
expense-tracker/
│
├── src/
│   │
│   ├── assets/
│   │   └── background3.jpg
│   │
│   ├── components/
│   │   ├── ExpenseCard.tsx
│   │   ├── ExpenseForm.tsx
│   │   ├── ExpenseList.tsx
│   │   └── Summary.tsx
│   │
│   ├── data/
│   │   └── expenses.ts
│   │
│   ├── types/
│   │   └── expense.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Expense Data

Each expense contains:

```ts
{
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}
```

Example:

```ts
{
  id: 1,
  title: "Lunch",
  amount: 280,
  category: "Food",
  date: "2026-08-28"
}
```

---

## Filtering Logic

The application supports three filtering methods:

### Search

Searches the expense title:

```text
Lunch
Groceries
Uber
```

### Category

Filters expenses according to their category:

```text
Food
Transport
Shopping
Entertainment
Bills
Other
```

### Month

Filters expenses using the year and month stored in the expense date.

For example:

```text
2026-08
```

represents:

```text
August 2026
```

The filters can also work together to narrow down the displayed expenses.

---

## Editing

When **Edit** is selected:

1. The selected expense is loaded into the form.
2. Its existing information is displayed.
3. The user can modify the values.
4. Selecting **Update Expense** updates the existing entry.

The application distinguishes between adding a new expense and editing an existing one using React state.

---

## Running the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, usually similar to:

```text
http://localhost:5173
```

---

## Learning Objectives

This project demonstrates several important React and TypeScript concepts:

* React components
* Props
* State with `useState`
* Side effects with `useEffect`
* TypeScript interfaces
* Event handling
* Form handling
* Conditional rendering
* Array `.map()`
* Array `.filter()`
* Array `.reduce()`
* Dynamic filtering
* Component communication
* Asset imports
* Responsive CSS
* CSS Grid and Flexbox
* Reusable UI components

---
## Screenshots
<img width="944" height="438" alt="Screenshot 2026-08-28 155023" src="https://github.com/user-attachments/assets/72e93ff0-4984-430e-8fb8-1e3c2925075c" />
Add Expense Section
<img width="948" height="378" alt="Screenshot 2026-08-28 155040" src="https://github.com/user-attachments/assets/17fddff8-f008-41c5-9732-13351d87d013" />
Recent Expenses

---

## Future Improvements

Possible next steps include:

* Persistent storage using `localStorage`
* Expense charts and visual analytics
* Category-based spending statistics
* Custom date ranges
* Dark/light theme
* Expense sorting
* Export expenses to CSV
* Backend/database integration
* Authentication and user accounts

---

## Project Goal

The goal of this project is to build a practical React application while learning how **components, state, props, forms, filtering, TypeScript, and CSS work together in a real-world frontend application**.
