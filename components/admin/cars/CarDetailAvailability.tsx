import { Availability } from "@/lib/data";

type CarDetailAvailabilityProps = {
  availability: Availability[];
};

export default function CarDetailAvailability({
  availability,
}: CarDetailAvailabilityProps) {
  return (
    <div>
      <h3 className="font-semibold text-slate-800 mb-1">Availability</h3>

      {availability.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
          {availability.map((a) => (
            <li key={a.id}>
              {a.start_at} → {a.end_at}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500 text-sm">No availability</p>
      )}
    </div>
  );
}
