import { cars, users, availability } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          Overview of your users, cars, and availability.
        </p>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Users
            </h2>
            <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
              {users.length}
            </p>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Cars
            </h2>
            <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
              {cars.length}
            </p>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Availability
            </h2>
            <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
              {availability.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
