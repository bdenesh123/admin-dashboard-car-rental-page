import { Car } from "@/lib/data";

type CarInfoProps = {
  car: Car;
};

export default function CarInfo({ car }: CarInfoProps) {
  return (
    <div className="p-4 space-y-1">
      <h2 className="font-semibold text-lg text-slate-900">
        {car.make} {car.model}
      </h2>
      <p className="text-slate-600 text-sm">Year: {car.year}</p>
      <p className="text-slate-600 text-sm">Seats: {car.seats}</p>
      <p className="text-slate-600 text-sm">Location: {car.location}</p>
      {car.dayPrice && (
        <p className="text-green-600 font-semibold text-sm">
          RM{car.dayPrice} / day
        </p>
      )}
    </div>
  );
}
