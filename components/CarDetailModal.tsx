"use client";

import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";

interface CarDetailModalProps {
  car: Car;
  users: User[];
  availability: Availability[];
  onClose: () => void;
}

export default function CarDetailModal({
  car,
  users,
  availability,
  onClose,
}: CarDetailModalProps) {
  const owner = users.find((u) => u.id === car.id); // mock
  const carAvailability = availability.filter((a) => a.carId === car.id);
  const isAvailable = carAvailability.length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-xl w-full p-6 shadow-lg overflow-y-auto max-h-[90vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-bold"
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {car.make} {car.model} ({car.year})
        </h2>

        {/* Availability Badge */}
        <span
          className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
              : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
          }`}
        >
          {isAvailable ? "Available" : "Booked"}
        </span>

        {/* Car Info */}
        <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
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
            <p className="col-span-2 text-green-600 dark:text-green-400 font-semibold">
              RM{car.dayPrice} / day
            </p>
          )}
        </div>

        {/* Owner */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Owner
          </h3>
          {owner ? (
            <p className="text-gray-700 dark:text-gray-300">
              {owner.name} ({owner.role})
            </p>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Unknown</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Availability
          </h3>
          {carAvailability.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              {carAvailability.map((a) => (
                <li key={a.id}>
                  {a.start_at} → {a.end_at}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No availability
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
