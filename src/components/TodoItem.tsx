import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div
      className={`todo-item ${
        todo.completed ? "is-completed" : ""
      }`}
    >
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span className="checkmark"></span>
      </label>

      <span className="todo-text">
        {todo.text}
      </span>

      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;