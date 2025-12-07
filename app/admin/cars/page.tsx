"use client";

import { cars, users, availability } from "@/lib/data";
import CarCard from "@/components/CarCard";

export default function CarsPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          users={users}
          availability={availability}
        />
      ))}
    </div>
  );
}
