import {
  Users,
  IndianRupee,
  UserCheck,
  TrendingUp,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  const icons: Record<string, React.ElementType> = {
    "Total Users": Users,
    Revenue: IndianRupee,
    "Active Users": UserCheck,
  };

  const Icon = icons[title] ?? TrendingUp;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">

      {/* Top row */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          <Icon size={20} />
        </div>

      </div>

      {/* Description */}
      <div className="mt-4 flex items-center gap-2">

        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
          <TrendingUp size={14} />
          {description}
        </span>

      </div>

    </div>
  );
}

export default StatCard;