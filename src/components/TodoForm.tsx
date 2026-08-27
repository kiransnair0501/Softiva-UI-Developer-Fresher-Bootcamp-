import { useState } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim() === "") {
      return;
    }

    onAddTodo(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;