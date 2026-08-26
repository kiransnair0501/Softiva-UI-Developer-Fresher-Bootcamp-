# Employee Card Grid — Day 1

## Objective

Build a responsive **Employee Card Grid** using **React, TypeScript, and Vite**, while learning the fundamentals of component-based UI development.

## What I Learned

* Vite project setup
* React project structure
* TypeScript interfaces
* TypeScript typed arrays
* React components
* JSX
* Props
* List rendering with `map()`
* React `key`
* `useState`
* Event handling
* Conditional rendering
* Array `filter()`
* Search functionality
* CSS Grid
* Responsive design
* Local image assets
* Component decomposition

## Project Structure

```text
src/
├── assets/
│   ├── default-user.jpg
│   └── wallpaper.png
│
├── components/
│   ├── EmployeeCard.tsx
│   └── EmployeeGrid.tsx
│
├── data/
│   └── employees.ts
│
├── types/
│   └── employee.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Features Implemented

### Employee Data

Created a TypeScript `Employee` interface containing:

* ID
* Name
* Role
* Department
* Email

Created an employee data array using the interface.

### Employee Cards

Created a reusable `EmployeeCard` component that receives employee information through **props**.

Each card displays:

* Profile image
* Employee name
* Role
* Department
* View Details button

### View Details

Implemented `useState` to show and hide additional employee information.

```text
View Details
      ↓
State changes
      ↓
Employee details appear
      ↓
Hide Details
```

### Search

Added an employee search field using:

* `useState`
* `onChange`
* `filter()`
* Conditional rendering

Users can search employees by name.

### Responsive Design

Implemented CSS Grid and media queries:

```text
Desktop → 3 columns
Tablet  → 2 columns
Mobile  → 1 column
```

### UI Styling

Added:

* Custom wallpaper background
* White employee cards
* Profile images
* Department badges
* Styled buttons
* Card hover effects
* Responsive layout
* Poppins font for headings
* Inter font for general UI text

## Key React Flow

```text
Employee Data
      ↓
EmployeeGrid
      ↓
map()
      ↓
EmployeeCard
      ↓
Props
      ↓
JSX
      ↓
useState
      ↓
Event Handling
      ↓
Conditional Rendering
```

## Bootcamp Requirements Covered

Today's work directly contributes to the Week 2 requirements:

* TypeScript Basics
* Interfaces
* Types
* React Components
* JSX
* Props
* State
* Event Handling
* Lists
* Conditional Rendering
* `useState`
* Project Structure
* Vite Workflow

## Screenshots

### Desktop View
<img width="947" height="437" alt="Screenshot 2026-08-26 121041" src="https://github.com/user-attachments/assets/9144fac1-d99c-42f7-863e-4f4c17281dd5" />

### Mobile / Responsive View
<img width="435" height="432" alt="Screenshot 2026-08-26 121106" src="https://github.com/user-attachments/assets/23154713-3208-40a4-8f23-cc229781dd60" />

### Search / Filter View
<img width="958" height="436" alt="Screenshot 2026-08-26 121145" src="https://github.com/user-attachments/assets/4b2be3b9-3b72-46ce-b3be-450f335c1c2f" />


The **Employee Card Grid** is also one of the specified Week 2 deliverables.

## End-of-Day Checklist

* [x] Employee Card Grid implemented
* [x] Responsive layout implemented
* [x] React interactions working
* [x] Search implemented
* [x] UI styling completed
