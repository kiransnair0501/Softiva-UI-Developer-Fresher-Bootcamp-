import type { Todo } from "../types/todo";

export const todosByDate: Record<string, Todo[]> = {
  "2026-08-27": [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Practice TypeScript",
      completed: false,
    },
    {
      id: 3,
      text: "Complete Todo App",
      completed: false,
    },
  ],

  "2026-08-28": [
    {
      id: 4,
      text: "Study JavaScript",
      completed: false,
    },
    {
      id: 5,
      text: "Practice array methods",
      completed: false,
    },
  ],

  "2026-08-29": [
    {
      id: 6,
      text: "Review React components",
      completed: false,
    },
    {
      id: 7,
      text: "Review props and state",
      completed: false,
    },
  ],
};