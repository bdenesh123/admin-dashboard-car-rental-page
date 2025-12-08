import { availability, cars } from "@/lib/data";

type AvailabilityRowProps = {
  a: (typeof availability)[number];
  index: number;
  today: string;
};

export default function AvailabilityRow({
  a,
  index,
  today,
}: AvailabilityRowProps) {
  const car = cars.find((c) => c.id === a.carId);
  const isBooked = a.start_at <= today && a.end_at >= today;

  return (
    <tr
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
            isBooked ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}
        >
          {isBooked ? "Booked" : "Available"}
        </span>
      </td>
    </tr>
  );
}
