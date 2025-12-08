"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";
import CarDetailCard from "./CarDetailCard";

interface CarCardProps {
  car: Car;
  users: User[];
  availability: Availability[];
}

export default function CarCard({ car, users, availability }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // To open and close the detail modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const today = new Date().toISOString().split("T")[0];

  // To filter the records for avaiability
  const carAvailability = availability.filter((a) => a.carId === car.id);

  // To check and see if the car is availablwe today
  const isAvailable = carAvailability.some(
    (a) => a.start_at <= today && a.end_at >= today
  );
  return (
    <>
      <div
        onClick={handleOpen}
        className="relative cursor-pointer border border-green-100 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
        <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-sm ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Available" : "Booked"}
        </div>

        <div className="relative w-full h-44 bg-white">
          <Image
            src={car.images.main}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 space-y-1">
          <h2 className="font-semibold text-lg text-slate-900">
            {car.make} {car.model}
          </h2>
          <p className="text-slate-600 text-sm">Year: {car.year}</p>
          <p className="text-slate-600 text-sm">Seats: {car.seats}</p>
          <p className="text-slate-600 text-sm">
            Location: {car.location}
          </p>{" "}
          {car.dayPrice && (
            <p className="text-green-600 font-semibold text-sm">
              RM{car.dayPrice} / day
            </p>
          )}
        </div>
      </div>

      {isOpen && (
        <CarDetailCard
          car={car}
          users={users}
          availability={availability}
          onClose={handleClose}
        />
      )}
    </>
  );
}
