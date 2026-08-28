import { useEffect, useState } from "react";

import type { Expense } from "../types/expense";

interface ExpenseFormProps {
  onAddExpense: (
    title: string,
    amount: number,
    category: string,
    date: string
  ) => void;

  onUpdateExpense: (
    id: number,
    title: string,
    amount: number,
    category: string,
    date: string
  ) => void;

  editingExpense: Expense | null;

  onCancelEdit: () => void;
}

function ExpenseForm({
  onAddExpense,
  onUpdateExpense,
  editingExpense,
  onCancelEdit,
}: ExpenseFormProps) {
  const [title, setTitle] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [category, setCategory] =
    useState("Food");

  const [date, setDate] =
    useState("2026-08-28");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(
        String(editingExpense.amount)
      );
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !amount ||
      !date
    ) {
      return;
    }

    if (editingExpense) {
      onUpdateExpense(
        editingExpense.id,
        title.trim(),
        Number(amount),
        category,
        date
      );
    } else {
      onAddExpense(
        title.trim(),
        Number(amount),
        category,
        date
      );
    }

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("2026-08-28");
  };

  return (
    <form
      className="expense-form"
      onSubmit={handleSubmit}
    >
      <div className="form-heading">

        <div>
          <span className="form-label">
            {editingExpense
              ? "EDIT EXPENSE"
              : "NEW EXPENSE"}
          </span>

          <h2>
            {editingExpense
              ? "Update expense"
              : "Add an expense"}
          </h2>
        </div>

        <span className="form-plus">
          {editingExpense ? "✎" : "+"}
        </span>

      </div>

      <div className="form-fields">

        <div className="field">
          <label>Expense</label>

          <input
            type="text"
            placeholder="e.g. Lunch"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div className="field">
          <label>Amount</label>

          <input
            type="number"
            placeholder="₹ 0"
            min="0"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
          />
        </div>

        <div className="field">
          <label>Category</label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="Food">Food</option>
            <option value="Transport">
              Transport
            </option>
            <option value="Shopping">
              Shopping
            </option>
            <option value="Entertainment">
              Entertainment
            </option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="field">
          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
          />
        </div>

      </div>

      <div className="form-actions">

        <button
          className="add-expense-button"
          type="submit"
        >
          {editingExpense
            ? "Update Expense"
            : "Add Expense"}
        </button>

        {editingExpense && (
          <button
            className="cancel-button"
            type="button"
            onClick={() => {
              setTitle("");
              setAmount("");
              setCategory("Food");
              setDate("2026-08-28");
              onCancelEdit();
            }}
          >
            Cancel
          </button>
        )}

      </div>
    </form>
  );
}

export default ExpenseForm;