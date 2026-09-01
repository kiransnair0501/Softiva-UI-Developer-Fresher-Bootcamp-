import {
  User,
  Mail,
  Briefcase,
  MapPin,
  Phone,
  Pencil,
  ShieldCheck,
} from "lucide-react";

import Layout from "../components/Layout";

function Profile() {
  return (
    <Layout>
      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Account
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
          Manage your personal information and account details.
        </p>
      </div>

      {/* Profile Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              AD
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Admin User
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
              Administrator
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <ShieldCheck size={15} />
              Verified Account
            </div>

          </div>

          <div className="mt-6 border-t border-gray-100 pt-5 dark:border-slate-800">

            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-slate-300">
              <Mail size={17} className="text-gray-400" />
              admin@example.com
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 dark:text-slate-300">
              <Phone size={17} className="text-gray-400" />
              +91 98765 43210
            </div>

          </div>

        </section>

        {/* Personal Information */}
        <section className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="mb-6 flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                Personal Information
              </p>

              <h2 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                Account Details
              </h2>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Pencil size={16} />
              Edit
            </button>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div className="rounded-lg border border-gray-100 p-4 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-slate-500">
                <User size={15} />
                Full Name
              </div>

              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Admin User
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-slate-500">
                <Mail size={15} />
                Email
              </div>

              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                admin@example.com
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-slate-500">
                <Briefcase size={15} />
                Role
              </div>

              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Administrator
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-slate-500">
                <Phone size={15} />
                Phone
              </div>

              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                +91 98765 43210
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 p-4 dark:border-slate-800 sm:col-span-2">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-slate-500">
                <MapPin size={15} />
                Location
              </div>

              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Kerala, India
              </p>
            </div>

          </div>

        </section>
      </div>
    </Layout>
  );
}

export default Profile;