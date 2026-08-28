import ExpenseCard from "./ExpenseCard";

import type { Expense } from "../types/expense";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
  onEdit: (expense: Expense) => void;
}

function ExpenseList({
  expenses,
  onDelete,
  onEdit,
}: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="empty-expenses">

        <div className="empty-symbol">
          ₹
        </div>

        <h2>
          No expenses found
        </h2>

        <p>
          Try changing your filters
          or adding an expense.
        </p>

      </div>
    );
  }

  return (
    <div className="expense-list">

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

    </div>
  );
}

export default ExpenseList;