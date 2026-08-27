import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import type { Todo } from "./types/todo";

import { todosByDate } from "./data/todos";

function App() {
  const [selectedDate, setSelectedDate] =
    useState("2026-08-27");

  const [todosBySelectedDate, setTodosBySelectedDate] =
    useState<Record<string, Todo[]>>(todosByDate);

  const todos =
    todosBySelectedDate[selectedDate] || [];

  const changeDate = (date: string) => {
    setSelectedDate(date);
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodosBySelectedDate((currentTodos) => ({
      ...currentTodos,

      [selectedDate]: [
        ...(currentTodos[selectedDate] || []),
        newTodo,
      ],
    }));
  };

  const toggleTodo = (id: number) => {
    setTodosBySelectedDate((currentTodos) => ({
      ...currentTodos,

      [selectedDate]: (
        currentTodos[selectedDate] || []
      ).map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
  };

  const deleteTodo = (id: number) => {
    setTodosBySelectedDate((currentTodos) => ({
      ...currentTodos,

      [selectedDate]: (
        currentTodos[selectedDate] || []
      ).filter((todo) => todo.id !== id),
    }));
  };

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  const remainingCount =
    todos.length - completedCount;

  return (
    <main>
      <section className="todo-container">

        <header className="todo-header">
          <div className="header-content">

            <p className="eyebrow">
              MY TASKS
            </p>

            <h1>
              Todo List
            </h1>

            <p className="subtitle">
              Organize your tasks and stay productive.
            </p>

          </div>

          <div className="date-section">

            <div className="date-label">
              <img
                src="/src/assets/calendericon.png"
                alt="Calendar"
                className="calendar-icon"
              />

              <span>
                DATE
              </span>
            </div>

            <input
              type="date"
              value={selectedDate}
              onChange={(event) =>
                changeDate(event.target.value)
              }
            />

          </div>
        </header>

        <div className="date-info">

          <div>
            <span className="date-info-label">
              Tasks for
            </span>

            <strong>
              {new Date(
                selectedDate + "T00:00:00"
              ).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                }
              )}
            </strong>
          </div>

          <div className="task-summary">

            <span>
              {remainingCount} remaining
            </span>

            <span className="summary-divider">
              •
            </span>

            <span>
              {completedCount} completed
            </span>

          </div>

        </div>

        <TodoForm
          onAddTodo={addTodo}
        />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

      </section>
    </main>
  );
}

export default App;