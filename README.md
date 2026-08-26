# UI Developer Fresher Bootcamp

## Overview

This repository contains the work completed as part of the **UI Developer Fresher Bootcamp**. The bootcamp focuses on building practical frontend development skills through self-study, hands-on implementation, assignments, feature development, Git/GitHub workflows, and internal reviews.

The program covers modern frontend technologies ranging from **HTML5 and CSS3 to JavaScript, TypeScript, React, Vite, Tailwind CSS, shadcn/ui, React Router, Zustand, React Hook Form, Zod, Axios, Git/GitHub, Figma, Playwright, and deployment platforms**.

---

## Technology Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* TypeScript
* React 19
* Vite
* Tailwind CSS
* shadcn/ui
* React Router
* Zustand
* React Hook Form
* Zod
* Axios
* Git & GitHub
* Figma
* Playwright (Basic)
* Vercel / Azure Static Web Apps

---

# Daily Schedule

The bootcamp follows a **6-hour daily schedule**.

| Time          | Activity                                      |
| ------------- | --------------------------------------------- |
| 09:00 – 10:30 | Self-study — videos/documentation             |
| 10:30 – 12:30 | Hands-on implementation                       |
| 12:30 – 13:00 | Break                                         |
| 13:00 – 14:30 | Assignment / feature development              |
| 14:30 – 15:00 | Git commit, PR creation, documentation update |

### Daily Completion Requirements

Every working day must end with:

* Git Commit
* GitHub Push
* Pull Request
* Learning Journal Entry

---

# Week 1 — HTML, CSS & JavaScript Fundamentals

## Goal

Build responsive websites **without using any frontend framework**.

## Topics

### HTML & CSS

* Semantic HTML
* Forms and Input Controls
* Tables
* CSS Box Model
* Flexbox
* CSS Grid
* Responsive Design
* Media Queries

### JavaScript

* DOM Manipulation
* Events
* Arrays and Objects
* Functions
* ES6 Syntax

## Self-Study Resources

### HTML & CSS

* MDN Web Docs — HTML
* MDN Web Docs — CSS
* freeCodeCamp Responsive Web Design

### JavaScript

* JavaScript.info — Complete Beginner Path
* MDN JavaScript Guide

## Deliverables

1. Company Landing Page
2. Login Page
3. Dashboard Layout
4. Responsive Pricing Page

## Internal Review 1

**Reviewer:** Senior UI Developer

### Evaluation Criteria

* Semantic HTML
* CSS Organization
* Responsive Behavior
* Naming Conventions
* JavaScript Readability

### Pass Criteria

> Pixel-accurate responsive implementation.

---

# Week 2 — TypeScript & React Foundations

## Goal

Understand **component-based UI development using React**.

## Self-Study Resources

### TypeScript

* TypeScript Handbook
* Total TypeScript Beginner Guide — YouTube

### React

* React Official Learn
* React Documentation

## Topics

### TypeScript

* TypeScript Basics
* Interfaces
* Types

### React

* React Components
* JSX
* Props
* State
* Event Handling
* Lists
* Conditional Rendering
* `useState`
* `useEffect`

### Development

* Project Structure
* Vite Workflow

## Deliverables

1. Counter App
2. Todo Application
3. Employee Card Grid
4. FAQ Accordion

## Internal Review 2

### Evaluation Criteria

* Component Decomposition
* TypeScript Usage
* React Patterns
* State Management
* Folder Structure

### Pass Criteria

> Functional React application with reusable components.

---

# Current Project — Employee Card Grid

The Employee Card Grid is one of the required **Week 2 deliverables**.

The project demonstrates:

* React components
* TypeScript interfaces
* Typed data
* JSX
* Props
* List rendering with `map()`
* React `key`
* `useState`
* Event handling
* Conditional rendering
* Search/filter functionality
* CSS Grid
* Responsive design
* Local image assets
* Component-based project structure

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

---

## Learning Flow

The Employee Card Grid follows this basic React architecture:

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

The search functionality follows:

```text
Search Input
      ↓
onChange
      ↓
useState
      ↓
filter()
      ↓
Filtered Employees
      ↓
map()
      ↓
Updated Cards
```

---

# Git & Documentation Workflow

Each completed working day follows the required workflow:

```text
Development
    ↓
Testing
    ↓
Git Commit
    ↓
GitHub Push
    ↓
Pull Request
    ↓
Learning Journal Entry
```

---

# Bootcamp Objectives

By completing the bootcamp, the developer is expected to progress from fundamental web development concepts toward modern component-based frontend development.

The progression is:

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
TypeScript
 ↓
React
 ↓
Component Architecture
 ↓
Modern Frontend Tooling
```

The bootcamp combines **self-study, implementation, assignments, feature development, documentation, and internal technical reviews** to evaluate practical frontend development skills.
