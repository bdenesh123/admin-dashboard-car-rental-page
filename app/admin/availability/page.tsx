import { availability, cars } from "@/lib/data";

export default function AvailabilityPage() {
  return (
    <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">Car Availability</h2>
      <table className="w-full table-auto border border-gray-300 dark:border-gray-700 rounded-md">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Car</th>
            <th className="p-2 text-left">Start At</th>
            <th className="p-2 text-left">End At</th>
          </tr>
        </thead>
        <tbody>
          {availability.map((item) => {
            const car = cars.find((c) => c.id === item.carId);
            return (
              <tr
                key={item.id}
                className="border-t border-gray-300 dark:border-gray-700"
              >
                <td className="p-2">{item.id}</td>
                <td className="p-2">
                  {car ? `${car.make} ${car.model}` : "Unknown"}
                </td>
                <td className="p-2">{item.start_at}</td>
                <td className="p-2">{item.end_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
