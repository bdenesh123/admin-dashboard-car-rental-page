"use client";

import CarCard from "./CarCard";
import { Car, User, Availability } from "@/lib/data";
import AvailabilityBadge from "./AvailabilityBadge";

interface CarsGridProps {
  cars: Car[];
  users: User[];
  availability: Availability[];
  carsState: Car[];
  setCarsState: React.Dispatch<React.SetStateAction<Car[]>>;
}

export default function CarsGrid({
  cars,
  users,
  availability,
  carsState,
  setCarsState,
}: CarsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => {
        const carAvailability = availability.filter((a) => a.carId === car.id);
        const isAvailable = carAvailability.some(
          (a) =>
            a.start_at <= new Date().toISOString().split("T")[0] &&
            a.end_at >= new Date().toISOString().split("T")[0]
        );

        return (
          <div key={car.id} className="relative">
            {/* Electric Badge */}
            {car.fuelType.toLowerCase() === "electric" && (
              <AvailabilityBadge
                isAvailable={true}
                position="top-left"
                className="bg-yellow-200 text-yellow-800"
              />
            )}

            {/* Availability Badge */}
            <AvailabilityBadge isAvailable={isAvailable} />

            <CarCard
              car={car}
              users={users}
              availability={availability}
              setCarsState={setCarsState}
              carsState={carsState}
            />
          </div>
        );
      })}
    </div>
  );
}
