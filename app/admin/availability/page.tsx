"use client";

import { availability, cars } from "@/lib/data";

export default function AvailabilityPage() {
  const today = new Date().toISOString().split("T")[0];

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
            <th className="p-3 text-left font-semibold">Status</th>
          </tr>
        </thead>

        <tbody>
          {availability.map((a, index) => {
            const car = cars.find((c) => c.id === a.carId);
            const isBooked = a.start_at <= today && a.end_at >= today;

            return (
              <tr
                key={a.id}
                className={`border-t border-green-100 ${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                }`}
              >
                <td className="p-3 text-slate-800">{a.id}</td>
                <td className="p-3 text-slate-800">
                  {car ? `${car.make} ${car.model}` : "Unknown"}
                </td>
                <td className="p-3 text-slate-700">{a.start_at}</td>
                <td className="p-3 text-slate-700">{a.end_at}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      isBooked
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {isBooked ? "Booked" : "Available"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
