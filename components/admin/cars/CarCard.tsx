"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, User, Availability } from "@/lib/data";
import CarDetailCard from "./CarDetailCard";
import CarAvailabilityBadge from "./CarAvailabilityBadge";
import CarInfo from "./CarInfo";

interface CarCardProps {
  car: Car;
  users: User[];
  availability: Availability[];
}

export default function CarCard({ car, users, availability }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const today = new Date().toISOString().split("T")[0];

  const carAvailability = availability.filter((a) => a.carId === car.id);

  const isAvailable = carAvailability.some(
    (a) => a.start_at <= today && a.end_at >= today
  );

  return (
    <>
      <div
        onClick={handleOpen}
        className="relative cursor-pointer border border-green-100 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
        <CarAvailabilityBadge isAvailable={isAvailable} />

        <div className="relative w-full h-44 bg-white">
          <Image
            src={car.images.main}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <CarInfo car={car} />
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
