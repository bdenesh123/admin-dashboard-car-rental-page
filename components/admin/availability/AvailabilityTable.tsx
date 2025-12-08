import { availability } from "@/lib/data";
import AvailabilityRow from "./AvailabilityRow";

type AvailabilityTableProps = {
  today: string;
};

export default function AvailabilityTable({ today }: AvailabilityTableProps) {
  return (
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
        {availability.map((a, index) => (
          <AvailabilityRow key={a.id} a={a} index={index} today={today} />
        ))}
      </tbody>
    </table>
  );
}
