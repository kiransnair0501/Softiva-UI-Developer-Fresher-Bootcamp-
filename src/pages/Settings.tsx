import { useState } from "react";

import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Save,
  Check,
} from "lucide-react";

import Layout from "../components/Layout";

type Tab = "general" | "security" | "notifications";

function Settings() {
  const [activeTab, setActiveTab] =
    useState<Tab>("general");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const tabs = [
    {
      id: "general" as Tab,
      label: "General",
      icon: SettingsIcon,
    },
    {
      id: "security" as Tab,
      label: "Security",
      icon: Shield,
    },
    {
      id: "notifications" as Tab,
      label: "Notifications",
      icon: Bell,
    },
  ];

  return (
    <Layout>
      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
          Manage your application preferences and account settings.
        </p>
      </div>

      {/* Settings Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-slate-700">

          <div className="flex overflow-x-auto px-2 sm:px-4">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive =
                activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id)
                  }
                  className={`flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition ${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {tab.label}
                </button>
              );
            })}

          </div>

        </div>

        {/* General */}
        {activeTab === "general" && (
          <div className="p-5 sm:p-6">

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                General Settings
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Configure the basic settings for AdminHub.
              </p>
            </div>

            <div className="max-w-2xl space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                  Application Name
                </label>

                <input
                  type="text"
                  defaultValue="AdminHub"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                  Language
                </label>

                <select
                  defaultValue="English"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Malayalam</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                  Timezone
                </label>

                <select
                  defaultValue="IST"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option value="IST">
                    India Standard Time (IST)
                  </option>

                  <option value="UTC">
                    Coordinated Universal Time (UTC)
                  </option>

                  <option value="EST">
                    Eastern Standard Time (EST)
                  </option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                {saved ? (
                  <>
                    <Check size={17} />
                    Saved
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Changes
                  </>
                )}
              </button>

            </div>
          </div>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <div className="p-5 sm:p-6">

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Security
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Manage your account security preferences.
              </p>
            </div>

            <div className="max-w-2xl space-y-4">

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4 dark:border-slate-700">

                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Two-factor authentication
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                    Add an extra layer of security to your account.
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />

              </div>

              <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700">

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  Last changed 30 days ago.
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Change Password
                </button>

              </div>

            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="p-5 sm:p-6">

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Choose which notifications you want to receive.
              </p>
            </div>

            <div className="max-w-2xl space-y-3">

              {[
                {
                  title: "Email Notifications",
                  description:
                    "Receive important updates by email.",
                },
                {
                  title: "System Notifications",
                  description:
                    "Show notifications inside AdminHub.",
                },
                {
                  title: "Security Alerts",
                  description:
                    "Get notified about important security events.",
                },
              ].map((notification) => (
                <label
                  key={notification.title}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {notification.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                      {notification.description}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                </label>
              ))}

            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default Settings;