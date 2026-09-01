import {
  Users,
  UserCheck,
  IndianRupee,
  Clock3,
} from "lucide-react";

function QuickOverview() {
  const overviewItems = [
    {
      label: "Total Users",
      value: "1,248",
      icon: Users,
    },
    {
      label: "Active Users",
      value: "892",
      icon: UserCheck,
    },
    {
      label: "Revenue",
      value: "₹84,200",
      icon: IndianRupee,
    },
    {
      label: "Pending",
      value: "24",
      icon: Clock3,
    },
  ];

  return (
    <section className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-gray-500">
          Summary
        </p>

        <h2 className="text-lg font-semibold text-gray-900">
          Quick Overview
        </h2>
      </div>

      {/* Overview Items */}
      <div className="space-y-3">
        {overviewItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-3 transition hover:bg-gray-50"
            >
              
              {/* Left */}
              <div className="flex items-center gap-3">
                
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={18} />
                </div>

                <span className="text-sm font-medium text-gray-600">
                  {item.label}
                </span>

              </div>

              {/* Right */}
              <span className="text-sm font-semibold text-gray-900">
                {item.value}
              </span>

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default QuickOverview;