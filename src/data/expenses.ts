import type { Expense } from "../types/expense";

export const initialExpenses: Expense[] = [
  {
    id: 1,
    title: "Lunch",
    amount: 280,
    category: "Food",
    date: "2026-08-28",
  },
  {
    id: 2,
    title: "Uber",
    amount: 420,
    category: "Transport",
    date: "2026-08-27",
  },
  {
    id: 3,
    title: "Netflix",
    amount: 649,
    category: "Entertainment",
    date: "2026-08-25",
  },
  {
    id: 4,
    title: "Groceries",
    amount: 1250,
    category: "Shopping",
    date: "2026-08-24",
  },
];