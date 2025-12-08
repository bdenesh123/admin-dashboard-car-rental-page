"use client";

import { useState, useMemo } from "react";
import { cars as initialCars, users, availability, Car } from "@/lib/data";
import CarCard from "@/components/CarCard";

export default function CarsPage() {
  // List of cars
  const [carsState, setCarsState] = useState<Car[]>(initialCars);

  const [search, setSearch] = useState("");
  // Filtering car class
  const [filterClass, setFilterClass] = useState<string | "All">("All");
  // Sorting cars by year or price
  const [sortBy, setSortBy] = useState<"year" | "price" | "none">("none");

  // Memoized filtered and sorted cars
  const displayedCars = useMemo(() => {
    let filtered = [...carsState];

    // Filter by search input (make, model, location)
    if (search) {
      filtered = filtered.filter(
        (c) =>
          c.make.toLowerCase().includes(search.toLowerCase()) ||
          c.model.toLowerCase().includes(search.toLowerCase()) ||
          c.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by car class
    if (filterClass !== "All") {
      if (filterClass === "electric") {
        filtered = filtered.filter(
          (c) => c.fuelType.toLowerCase() === "electric"
        );
      } else {
        filtered = filtered.filter(
          (c) => c.class.toLowerCase() === filterClass.toLowerCase()
        );
      }
    }
    // Sort cars by selected criteria
    if (sortBy === "year") filtered = filtered.sort((a, b) => b.year - a.year);
    if (sortBy === "price")
      filtered = filtered.sort((a, b) => a.dayPrice - b.dayPrice);

    return filtered;
  }, [carsState, search, filterClass, sortBy]);

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by make, model, location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-200 rounded-lg p-2 flex-1"
        />

        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="border border-green-200 rounded-lg p-2"
        >
          <option value="All">All Classes</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
          <option value="electric">Electric</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "year" | "price" | "none")
          }
          className="border border-green-200 rounded-lg p-2"
        >
          <option value="none">No Sorting</option>
          <option value="year">Sort by Year</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      {/* Cars grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCars.map((car) => (
          <div key={car.id} className="relative">
            {car.fuelType.toLowerCase() === "electric" && (
              <span className="absolute top-3 left-3 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold z-10">
                Electric
              </span>
            )}

            <CarCard
              car={car}
              users={users}
              availability={availability}
              setCarsState={setCarsState}
              carsState={carsState}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
