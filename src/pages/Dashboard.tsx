import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import ActivitySection from "../components/ActivitySection";
import QuickOverview from "../components/QuickOverview";
import UserTable from "../components/UserTable";

function Dashboard() {
  return (
    <Layout>
      {/* Page Heading */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Welcome back
        </p>

        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
          Here's what's happening with your platform today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Users"
          value="1,248"
          description="+12% this month"
        />

        <StatCard
          title="Revenue"
          value="₹84,200"
          description="+8.4% this month"
        />

        <StatCard
          title="Active Users"
          value="892"
          description="+5.2% this month"
        />
      </div>

      {/* Activity + Overview */}
      <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        <ActivitySection />

        <QuickOverview />
      </div>

      {/* Users */}
      <div className="mt-6">
        <UserTable />
      </div>
    </Layout>
  );
}

export default Dashboard;