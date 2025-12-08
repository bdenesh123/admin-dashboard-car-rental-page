"use client";

import { useState } from "react";
import Image from "next/image";
import CarDetailCard from "./CarDetailCard";
import { Car, User, Availability } from "@/lib/data";

interface CarCardProps {
  car: Car;
  users: User[];
  availability: Availability[];
  carsState?: Car[];
  setCarsState?: React.Dispatch<React.SetStateAction<Car[]>>;
}

export default function CarCard({ car, users, availability }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className="relative cursor-pointer border border-green-100 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
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
          <p className="text-slate-600 text-sm">Location: {car.location}</p>
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
