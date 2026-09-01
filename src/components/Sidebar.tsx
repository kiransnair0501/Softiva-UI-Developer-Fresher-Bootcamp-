import {
  LayoutDashboard,
  Users,
  UserCircle,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      path: "/users",
      icon: Users,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserCircle,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        flex w-64 flex-col
        bg-slate-900 p-5 text-white
        transition-transform duration-300
        md:static md:min-h-screen md:translate-x-0
        ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >
      <div className="mb-10 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
            A
          </div>

          <div>
            <h2 className="text-lg font-bold">
              AdminHub
            </h2>

            <p className="text-xs text-slate-400">
              Admin Portal
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Close navigation"
        >
          <X size={19} />
        </button>

      </div>

      <nav className="flex-1 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={19} />

              <span>{link.name}</span>
            </NavLink>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 pt-4">

        <div className="flex items-center gap-3 rounded-xl p-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
            AD
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              Admin User
            </p>

            <p className="truncate text-xs text-slate-400">
              admin@example.com
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;