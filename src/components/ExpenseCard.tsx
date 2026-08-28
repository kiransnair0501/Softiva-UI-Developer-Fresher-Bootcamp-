import type { Expense } from "../types/expense";

interface ExpenseCardProps {
  expense: Expense;
  onDelete: (id: number) => void;
  onEdit: (expense: Expense) => void;
}

function ExpenseCard({
  expense,
  onDelete,
  onEdit,
}: ExpenseCardProps) {
  return (
    <article className="expense-card">

      <div className="expense-left">

        <div className="category-icon">
          {expense.category === "Food"
            ? "🍴"
            : expense.category === "Transport"
            ? "🚗"
            : expense.category === "Shopping"
            ? "🛍"
            : expense.category ===
              "Entertainment"
            ? "🎬"
            : expense.category === "Bills"
            ? "▤"
            : "•"}
        </div>

        <div className="expense-info">

          <h3>
            {expense.title}
          </h3>

          <div className="expense-meta">

            <span>
              {expense.category}
            </span>

            <span className="dot">
              •
            </span>

            <span>
              {new Date(
                expense.date + "T00:00:00"
              ).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>

          </div>

        </div>

      </div>

      <div className="expense-right">

        <strong>
          ₹
          {expense.amount.toLocaleString(
            "en-IN"
          )}
        </strong>

        <button
          className="edit-button"
          onClick={() =>
            onEdit(expense)
          }
        >
          Edit
        </button>

        <button
          className="remove-button"
          onClick={() =>
            onDelete(expense.id)
          }
          aria-label="Delete expense"
        >
          ×
        </button>

      </div>

    </article>
  );
}

export default ExpenseCard;