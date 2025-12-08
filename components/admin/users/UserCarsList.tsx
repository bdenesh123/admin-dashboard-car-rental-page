import { Car } from "@/lib/data";

type UserCarsListProps = {
  cars: Car[];
};

export default function UserCarsList({ cars }: UserCarsListProps) {
  if (cars.length === 0) return <p className="text-slate-500">No cars owned</p>;

  return (
    <div className="max-h-[40vh] overflow-y-auto space-y-2">
      {cars.map((car) => (
        <div
          key={car.id}
          className="border border-green-100 p-3 rounded-lg bg-green-50"
        >
          <p className="font-semibold text-slate-800">
            {car.make} {car.model} ({car.year})
          </p>
          <p className="text-sm text-slate-600">
            Location: {car.location} | RM{car.dayPrice}/day
          </p>
        </div>
      ))}
    </div>
  );
}
