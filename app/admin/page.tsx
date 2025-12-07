import { cars, users, availability } from "@/lib/data";

export default function AdminHome() {
  const stats = [
    {
      title: "Users",
      total: users.length,
      color: "bg-blue-500",
    },
    {
      title: "Cars",
      total: cars.length,
      color: "bg-green-500",
    },
    {
      title: "Availability",
      total: availability.length,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h2 className="text-4xl font-extrabold mb-2 text-slate-900">
          Welcome, Admin
        </h2>
        <p className="text-slate-600 text-lg">
          Manage users, cars, and availability easily from the sidebar.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition border border-green-100"
          >
            <div
              className={`w-12 h-12 mb-4 rounded-full ${stat.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
            >
              {stat.total}
            </div>

            <h3 className="text-xl font-semibold mb-1 text-slate-900">
              {stat.title}
            </h3>

            <p className="text-slate-600">Total: {stat.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
