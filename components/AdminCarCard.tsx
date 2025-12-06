"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";
import CarDetailModal from "./CarDetailModal";

interface AdminCarCardProps {
  car: Car;
  users: User[];
  availability: Availability[];
}

export default function AdminCarCard({
  car,
  users,
  availability,
}: AdminCarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const carAvailability = availability.filter((a) => a.carId === car.id);
  const isAvailable = carAvailability.length > 0;

  return (
    <>
      {/* Car Card */}
      <div
        onClick={handleOpen}
        className="relative cursor-pointer border rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
        {/* Availability Badge */}
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
            isAvailable
              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
              : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
          }`}
        >
          {isAvailable ? "Available" : "Booked"}
        </div>

        {/* Car Image */}
        <div className="relative w-full h-44 bg-white">
          <Image
            src={car.images.main}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Car Details */}
        <div className="p-4 space-y-1">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            {car.make} {car.model}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Year: {car.year}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Seats: {car.seats}
          </p>
          {car.dayPrice && (
            <p className="text-green-600 dark:text-green-400 font-semibold text-sm">
              RM{car.dayPrice} / day
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <CarDetailModal
          car={car}
          users={users}
          availability={availability}
          onClose={handleClose}
        />
      )}
    </>
  );
}
