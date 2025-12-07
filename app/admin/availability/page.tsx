import { availability, cars } from "@/lib/data";

export default function AvailabilityPage() {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl p-6 shadow-lg border border-green-100">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">
        Car Availability
      </h2>

      <table className="w-full table-auto border border-green-100 rounded-lg overflow-hidden">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="p-3 text-left font-semibold">ID</th>
            <th className="p-3 text-left font-semibold">Car</th>
            <th className="p-3 text-left font-semibold">Start At</th>
            <th className="p-3 text-left font-semibold">End At</th>
          </tr>
        </thead>

        <tbody>
          {availability.map((item, index) => {
            const car = cars.find((c) => c.id === item.carId);
            return (
              <tr
                key={item.id}
                className={`border-t border-green-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                }`}
              >
                <td className="p-3 text-slate-800">{item.id}</td>
                <td className="p-3 text-slate-800">
                  {car ? `${car.make} ${car.model}` : "Unknown"}
                </td>
                <td className="p-3 text-slate-700">{item.start_at}</td>
                <td className="p-3 text-slate-700">{item.end_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
