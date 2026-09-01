import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  X,
  MoreHorizontal,
  Pencil,
  Trash2,
  Mail,
  UserPlus,
} from "lucide-react";

import Layout from "../components/Layout";
import Toast from "../components/Toast";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "User";
  status: "Active" | "Inactive";
}

function Users() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Meera Thomas",
      email: "meera@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Menon",
      email: "rahul@example.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Anjali Nair",
      email: "anjali@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] =
    useState<number | null>(null);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] =
    useState<User["role"]>("User");

  const [status, setStatus] =
    useState<User["status"]>("Active");

  const [toast, setToast] = useState<string | null>(
    null
  );

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return users;
    }

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }, [users, search]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const openAddDialog = () => {
    setEditingUser(null);
    setName("");
    setEmail("");
    setRole("User");
    setStatus("Active");
    setDialogOpen(true);
  };

  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setStatus(user.status);
    setDialogOpen(true);
    setMenuOpen(null);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingUser(null);
    setName("");
    setEmail("");
    setRole("User");
    setStatus("Active");
  };

  const saveUser = () => {
    if (!name.trim() || !email.trim()) {
      showToast("Please complete all required fields.");
      return;
    }

    if (editingUser) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                name: name.trim(),
                email: email.trim(),
                role,
                status,
              }
            : user
        )
      );

      showToast("User updated successfully.");
    } else {
      const newUser: User = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        role,
        status,
      };

      setUsers((currentUsers) => [
        ...currentUsers,
        newUser,
      ]);

      showToast("User added successfully.");
    }

    closeDialog();
  };

  const deleteUser = (id: number) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );

    setMenuOpen(null);
    showToast("User deleted successfully.");
  };

  return (
    <Layout>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
            Users
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Manage users and their access.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddDialog}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-blue-950">
          <Search
            size={19}
            className="shrink-0 text-gray-400"
            aria-hidden="true"
          />

          <span className="sr-only">
            Search users
          </span>

          <input
            type="search"
            placeholder="Search users..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
          />
        </label>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
          <UserPlus size={17} />
          {filteredUsers.length} of {users.length} users
        </div>
      </div>

      <section
        className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
        aria-label="Users list"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <caption className="sr-only">
              Application users
            </caption>

            <thead className="bg-gray-50 dark:bg-slate-800/60">
              <tr>
                <th className="px-5 py-3 font-medium text-gray-500 dark:text-slate-400">
                  User
                </th>

                <th className="px-5 py-3 font-medium text-gray-500 dark:text-slate-400">
                  Email
                </th>

                <th className="px-5 py-3 font-medium text-gray-500 dark:text-slate-400">
                  Role
                </th>

                <th className="px-5 py-3 font-medium text-gray-500 dark:text-slate-400">
                  Status
                </th>

                <th className="px-5 py-3 text-right font-medium text-gray-500 dark:text-slate-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const initials = user.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <tr
                      key={user.id}
                      className="border-t border-gray-100 transition hover:bg-gray-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                            aria-hidden="true"
                          >
                            {initials}
                          </div>

                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {user.name}
                            </p>

                            <p className="text-xs text-gray-400 dark:text-slate-500">
                              User #{user.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400">
                          <Mail
                            size={15}
                            aria-hidden="true"
                          />
                          {user.email}
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-300">
                          {user.role}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                              : "bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              user.status === "Active"
                                ? "bg-emerald-500"
                                : "bg-gray-400"
                            }`}
                            aria-hidden="true"
                          />

                          {user.status}
                        </span>
                      </td>

                      <td className="relative px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setMenuOpen(
                              menuOpen === user.id
                                ? null
                                : user.id
                            )
                          }
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                          aria-label={`Actions for ${user.name}`}
                          aria-expanded={
                            menuOpen === user.id
                          }
                          aria-haspopup="menu"
                        >
                          <MoreHorizontal size={19} />
                        </button>

                        {menuOpen === user.id && (
                          <div
                            className="absolute right-5 top-14 z-20 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 text-left shadow-lg dark:border-slate-700 dark:bg-slate-900"
                            role="menu"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                openEditDialog(user)
                              }
                              className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-slate-200 dark:hover:bg-slate-800"
                              role="menuitem"
                            >
                              <Pencil size={16} />
                              Edit
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                deleteUser(user.id)
                              }
                              className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:hover:bg-red-950/30"
                              role="menuitem"
                            >
                              <Trash2 size={16} />
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center"
                  >
                    <Search
                      size={28}
                      className="mx-auto text-gray-300"
                      aria-hidden="true"
                    />

                    <p className="mt-3 font-medium text-gray-700 dark:text-slate-200">
                      No users found
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                      Try a different search term.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add/Edit Dialog */}
      {dialogOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4"
          role="presentation"
          onMouseDown={closeDialog}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900"
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-dialog-title"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2
                  id="user-dialog-title"
                  className="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  {editingUser
                    ? "Edit User"
                    : "Add User"}
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  {editingUser
                    ? "Update this user's information."
                    : "Create a new user account."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeDialog}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:bg-slate-800"
                aria-label="Close dialog"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="user-name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  Name
                </label>

                <input
                  id="user-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Enter name"
                  autoComplete="name"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="user-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  Email
                </label>

                <input
                  id="user-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="user-role"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  Role
                </label>

                <select
                  id="user-role"
                  value={role}
                  onChange={(event) =>
                    setRole(
                      event.target.value as User["role"]
                    )
                  }
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="user-status"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200"
                >
                  Status
                </label>

                <select
                  id="user-status"
                  value={status}
                  onChange={(event) =>
                    setStatus(
                      event.target.value as User["status"]
                    )
                  }
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option value="Active">
                    Active
                  </option>
                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeDialog}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveUser}
                disabled={!name.trim() || !email.trim()}
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {editingUser
                  ? "Save Changes"
                  : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <Toast
          message={toast}
          onClose={() => setToast(null)}
        />
      )}
    </Layout>
  );
}

export default Users;