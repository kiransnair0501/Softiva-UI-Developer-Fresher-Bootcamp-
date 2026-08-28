import { useState } from "react";

import Summary from "./components/Summary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import type { Expense } from "./types/expense";

import { initialExpenses } from "./data/expenses";

function App() {
  const [expenses, setExpenses] =
    useState<Expense[]>(initialExpenses);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [month, setMonth] =
    useState("All");

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  const addExpense = (
    title: string,
    amount: number,
    expenseCategory: string,
    date: string
  ) => {
    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount,
      category: expenseCategory,
      date,
    };

    setExpenses((currentExpenses) => [
      newExpense,
      ...currentExpenses,
    ]);
  };

  const updateExpense = (
    id: number,
    title: string,
    amount: number,
    expenseCategory: string,
    date: string
  ) => {
    setExpenses((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              title,
              amount,
              category: expenseCategory,
              date,
            }
          : expense
      )
    );

    setEditingExpense(null);
  };

  const deleteExpense = (id: number) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter(
        (expense) => expense.id !== id
      )
    );

    if (editingExpense?.id === id) {
      setEditingExpense(null);
    }
  };

  const filteredExpenses =
    expenses.filter((expense) => {
      const matchesSearch =
        expense.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        expense.category === category;

      const matchesMonth =
        month === "All" ||
        expense.date.startsWith(month);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMonth
      );
    });

  const total = expenses.reduce(
    (sum, expense) =>
      sum + expense.amount,
    0
  );

  const months = [
    "All",
    ...Array.from(
      new Set(
        expenses.map((expense) =>
          expense.date.slice(0, 7)
        )
      )
    ),
  ];

  const formatMonth = (value: string) => {
    if (value === "All") {
      return "All months";
    }

    return new Date(
      `${value}-01T00:00:00`
    ).toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main>
      <div className="app-container">

        {/* HEADER */}

        <header className="app-header">

          <div>
            <p className="eyebrow">
              PERSONAL FINANCE
            </p>

            <h1>
              Expense Tracker
            </h1>

            <p className="subtitle">
              Keep track of where your
              money goes.
            </p>
          </div>

          <div className="header-badge">
            <span>
              TOTAL SPENDING
            </span>

            <strong>
              ₹
              {total.toLocaleString("en-IN")}
            </strong>
          </div>

        </header>

        {/* SUMMARY */}

        <Summary
          total={total}
          count={expenses.length}
        />

        {/* FORM */}

        <ExpenseForm
          onAddExpense={addExpense}
          onUpdateExpense={updateExpense}
          editingExpense={editingExpense}
          onCancelEdit={() =>
            setEditingExpense(null)
          }
        />

        {/* EXPENSE SECTION */}

        <section className="expenses-section">

          <div className="section-header">

            <div>
              <p className="section-label">
                TRANSACTIONS
              </p>

              <h2>
                Recent expenses
              </h2>
            </div>

            <span className="expense-count">
              {filteredExpenses.length} shown
            </span>

          </div>

          {/* FILTERS */}

          <div className="filters">

            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search expenses..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              <option value="All">
                All categories
              </option>

              <option value="Food">
                Food
              </option>

              <option value="Transport">
                Transport
              </option>

              <option value="Shopping">
                Shopping
              </option>

              <option value="Entertainment">
                Entertainment
              </option>

              <option value="Bills">
                Bills
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            <select
              value={month}
              onChange={(event) =>
                setMonth(event.target.value)
              }
            >
              {months.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {formatMonth(item)}
                </option>
              ))}
            </select>

          </div>

          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
            onEdit={setEditingExpense}
          />

        </section>

      </div>
    </main>
  );
}

export default App;