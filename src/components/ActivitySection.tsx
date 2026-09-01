import {
  UserPlus,
  CheckCircle,
  UserRound,
  CreditCard,
} from "lucide-react";

function ActivitySection() {
  const activities = [
    {
      text: "New user registered",
      time: "5 minutes ago",
      icon: UserPlus,
    },
    {
      text: "Invoice approved",
      time: "18 minutes ago",
      icon: CheckCircle,
    },
    {
      text: "Profile updated",
      time: "42 minutes ago",
      icon: UserRound,
    },
    {
      text: "New payment received",
      time: "1 hour ago",
      icon: CreditCard,
    },
  ];

  return (
    <section className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Updates
        </p>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
      </div>

      {/* Activity List */}
      <div className="space-y-4">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.text}
              className="flex items-center gap-3 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 dark:border-slate-800"
            >

              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Icon size={18} />
              </div>

              {/* Activity information */}
              <div className="min-w-0 flex-1">

                <p className="text-sm font-medium text-gray-800 dark:text-slate-200">
                  {activity.text}
                </p>

                <p className="mt-0.5 text-xs text-gray-400 dark:text-slate-500">
                  {activity.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default ActivitySection;