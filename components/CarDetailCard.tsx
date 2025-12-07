"use client";

import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";

interface CarDetailCardProps {
  car: Car;
  users: User[];
  availability: Availability[];
  onClose: () => void;
}

export default function CarDetailCard({
  car,
  users,
  availability,
  onClose,
}: CarDetailCardProps) {
  const owner = users.find((u) => u.id === car.id); // mock
  const carAvailability = availability.filter((a) => a.carId === car.id);
  const isAvailable = carAvailability.length > 0;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] relative border border-green-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-white border border-green-100 text-slate-600 hover:text-slate-900 hover:bg-green-100 transition flex items-center justify-center text-lg font-bold shadow-md"
        >
          ✕
        </button>

        {/* Car Image */}
        <div className="relative w-full h-56 mb-4 rounded-lg bg-white overflow-hidden">
          <Image
            src={car.images.main}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Car Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {car.make} {car.model} ({car.year})
        </h2>

        {/* Availability Badge */}
        <span
          className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Available" : "Booked"}
        </span>

        {/* Car Info */}
        <div className="grid grid-cols-2 gap-4 text-slate-700 mb-4 text-sm sm:text-base">
          <p>
            <span className="font-semibold">Seats:</span> {car.seats}
          </p>
          <p>
            <span className="font-semibold">Transmission:</span>{" "}
            {car.transmission}
          </p>
          <p>
            <span className="font-semibold">Fuel:</span> {car.fuelType}
          </p>
          <p>
            <span className="font-semibold">Class:</span> {car.class}
          </p>

          {car.dayPrice && (
            <p className="col-span-2 text-green-600 font-semibold">
              RM{car.dayPrice} / day
            </p>
          )}
        </div>

        {/* Owner */}
        <div className="mb-4">
          <h3 className="font-semibold text-slate-800 mb-1">Owner</h3>
          {owner ? (
            <p className="text-slate-700">
              {owner.name} ({owner.role})
            </p>
          ) : (
            <p className="text-slate-500">Unknown</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-1">Availability</h3>

          {carAvailability.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
              {carAvailability.map((a) => (
                <li key={a.id}>
                  {a.start_at} → {a.end_at}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500 text-sm">No availability</p>
          )}
        </div>
      </div>
    </div>
  );
}
