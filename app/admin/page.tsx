export default function AdminHome() {
  const stats = [
    { title: "Users", total: 12, color: "bg-blue-500" },
    { title: "Cars", total: 9, color: "bg-green-500" },
    { title: "Availability", total: 15, color: "bg-yellow-500" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-4xl font-extrabold mb-2">Welcome, Admin!</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Manage users, cars, and availability easily from the sidebar.
        </p>
      </header>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white dark:bg-zinc-800`}
          >
            <div
              className={`w-12 h-12 mb-4 rounded-full ${stat.color} flex items-center justify-center text-white text-xl font-bold`}
            >
              {stat.total}
            </div>
            <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Total: {stat.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
