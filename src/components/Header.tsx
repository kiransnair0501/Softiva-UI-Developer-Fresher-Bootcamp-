import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronDown,
  Moon,
  Sun,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="fixed right-0 top-0 z-30 flex h-[73px] w-full items-center justify-between border-b border-gray-200 bg-white px-4 transition-colors dark:border-slate-800 dark:bg-slate-900 md:px-6">

      {/* Left */}
      <div className="flex items-center">

        <button
          type="button"
          onClick={onMenuClick}
          className="mr-3 rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>

        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            Admin Portal
          </p>

          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            AdminHub
          </h1>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Theme */}
        <button
          type="button"
          onClick={() =>
            setDarkMode((current) => !current)
          }
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-yellow-300 dark:hover:bg-slate-800"
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {darkMode ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span
            aria-hidden="true"
            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
          />
        </button>

        {/* Profile Dropdown */}
        <div
          ref={menuRef}
          className="relative"
        >
          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            aria-label="Open admin menu"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
              aria-hidden="true"
            >
              AD
            </div>

            <span className="hidden text-sm font-medium text-gray-700 dark:text-slate-200 sm:block">
              Admin
            </span>

            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform dark:text-slate-400 ${
                menuOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900"
              role="menu"
            >
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-slate-200 dark:hover:bg-slate-800"
                role="menuitem"
              >
                <User size={17} />
                Profile
              </Link>

              <Link
                to="/settings"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-slate-200 dark:hover:bg-slate-800"
                role="menuitem"
              >
                <Settings size={17} />
                Settings
              </Link>

              <div
                className="border-t border-gray-100 dark:border-slate-800"
                role="separator"
              />

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 dark:hover:bg-red-950/30"
                role="menuitem"
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;