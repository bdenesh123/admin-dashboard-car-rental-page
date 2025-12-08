"use client";

import { useState, useMemo } from "react";
import { cars as initialCars, users, availability, Car } from "@/lib/data";
import CarFilters from "@/components/admin/cars/CarFilters";
import CarsGrid from "@/components/admin/cars/CarsGrid";

export default function CarsPage() {
  const [carsState, setCarsState] = useState<Car[]>(initialCars);
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState<string | "All">("All");
  const [sortBy, setSortBy] = useState<"year" | "price" | "none">("none");

  const displayedCars = useMemo(() => {
    let filtered = [...carsState];

    if (search) {
      filtered = filtered.filter(
        (c) =>
          c.make.toLowerCase().includes(search.toLowerCase()) ||
          c.model.toLowerCase().includes(search.toLowerCase()) ||
          c.location.toLowerCase().includes(search.toLowerCase())
      );
    }

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

    if (sortBy === "year") filtered = filtered.sort((a, b) => b.year - a.year);
    if (sortBy === "price")
      filtered = filtered.sort((a, b) => a.dayPrice - b.dayPrice);

    return filtered;
  }, [carsState, search, filterClass, sortBy]);

  return (
    <div className="p-6">
      <CarFilters
        search={search}
        setSearch={setSearch}
        filterClass={filterClass}
        setFilterClass={setFilterClass}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <CarsGrid
        cars={displayedCars}
        users={users}
        availability={availability}
        setCarsState={setCarsState}
        carsState={carsState}
      />
    </div>
  );
}
