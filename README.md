# Todo App

A simple and responsive Todo application built with **React, TypeScript, and CSS**. The project focuses on understanding React fundamentals while building a practical task-management interface.

## Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Display remaining and completed task counts
* Select a date for tasks
* Maintain different tasks for different dates
* Empty-state message when no tasks exist
* Responsive layout for desktop and mobile
* Custom wallpaper background
* Custom calendar icon
* Clean, modern UI with hover and focus effects

## Tech Stack

* **React** — Component-based UI development
* **TypeScript** — Type safety and interfaces
* **CSS** — Layout, styling, responsiveness, and visual design
* **Vite** — Development server and build tool

## Project Structure

```text
src/
├── assets/
│   ├── wallpaper.jpg
│   └── calendericon.png
│
├── components/
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
│
├── data/
│   └── todos.ts
│
├── types/
│   └── todo.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## How It Works

The application uses React state to manage the selected date and the tasks associated with each date.

```text
Selected Date
      ↓
Find tasks for that date
      ↓
Display Todo List
      ↓
Add / Complete / Delete
      ↓
Update React State
```

Tasks are organized using a date-based structure:

```ts
Record<string, Todo[]>
```

For example:

```text
2026-08-27
 ├── Learn React
 ├── Practice TypeScript
 └── Complete Todo App

2026-08-28
 ├── Study JavaScript
 └── Practice array methods
```

## React Concepts Practiced

### `useState`

Used to manage changing application data such as the selected date and Todo lists.

### Props

Components receive data and functions from their parent components.

For example:

```tsx
<TodoList
  todos={todos}
  onToggle={toggleTodo}
  onDelete={deleteTodo}
/>
```

### Interfaces

TypeScript interfaces define the structure of a Todo:

```ts
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```

### `map()`

Used to render each Todo:

```tsx
todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
))
```

### `filter()`

Used for operations such as counting completed tasks and deleting tasks.

### Conditional Rendering

The application displays either the Todo list or an empty state depending on whether tasks exist.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

## Screenshot
<img width="948" height="438" alt="Screenshot 2026-08-27 114133" src="https://github.com/user-attachments/assets/68958640-d785-407d-ba5c-112313c8adf5" />

## Learning Objective

The main goal of this project is to understand how **React components, TypeScript types, props, state, event handling, arrays, objects, and CSS** work together to create an interactive frontend application.

## Future Improvements

Possible future additions include:

* All / Active / Completed filters
* Persistent tasks using `localStorage`
* Task editing
* Task priorities
* Categories
* A custom calendar interface
* Drag-and-drop task ordering
* Backend/database integration
* User authentication
