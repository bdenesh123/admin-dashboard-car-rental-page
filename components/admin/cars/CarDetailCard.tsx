"use client";

import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";
import CarDetailOwner from "./CarDetailOwner";
import CarDetailAvailability from "./CarDetailAvailability";

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
  const today = new Date().toISOString().split("T")[0];

  const owner = users.find((u) => u.id === car.ownerId);
  const carAvailability = availability.filter((a) => a.carId === car.id);
  const isAvailable = carAvailability.some(
    (a) => a.start_at <= today && a.end_at >= today
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] relative border border-green-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-white border border-green-100 text-slate-600 hover:text-slate-900 hover:bg-green-100 transition flex items-center justify-center text-lg font-bold shadow-md"
        >
          ✕
        </button>

        <div className="relative w-full h-56 mb-4 rounded-lg bg-white overflow-hidden">
          <Image
            src={car.images.main}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {car.make} {car.model} ({car.year})
        </h2>

        <span
          className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Available" : "Booked"}
        </span>

        <div className="flex flex-col gap-2 text-slate-700 mb-4 text-sm sm:text-base">
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
          <p>
            <span className="font-semibold">Location:</span> {car.location}
          </p>
          {car.dayPrice && (
            <p className="text-green-600 font-semibold">
              RM{car.dayPrice} / day
            </p>
          )}
        </div>

        <CarDetailOwner owner={owner} />
        <CarDetailAvailability availability={carAvailability} />
      </div>
    </div>
  );
}
