import {
  MoreHorizontal,
  Mail,
} from "lucide-react";

interface User {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

function UserTable() {
  const users: User[] = [
    {
      name: "Arun Kumar",
      email: "arun@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Meera Thomas",
      email: "meera@example.com",
      role: "User",
      status: "Active",
    },
    {
      name: "Rahul Menon",
      email: "rahul@example.com",
      role: "Manager",
      status: "Inactive",
    },
  ];

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-slate-700">

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Users
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Manage your application users
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-300">
          {users.length} users
        </span>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[650px] text-left text-sm">

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

            {users.map((user) => {

              const initials = user.name
                .split(" ")
                .map((name) => name[0])
                .join("");

              return (
                <tr
                  key={user.email}
                  className="border-t border-gray-100 transition hover:bg-gray-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                >

                  {/* User */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {initials}
                      </div>

                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-400 dark:text-slate-500">
                          Account #{user.email.split("@")[0]}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Email */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400">
                      <Mail size={15} />
                      {user.email}
                    </div>

                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-300">
                      {user.role}
                    </span>

                  </td>

                  {/* Status */}
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
                      />

                      {user.status}

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right">

                    <button
                      className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                      aria-label={`Actions for ${user.name}`}
                    >
                      <MoreHorizontal size={19} />
                    </button>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default UserTable;