"use client";

interface CarFiltersProps {
  search: string;
  setSearch: (val: string) => void;
  filterClass: string | "All";
  setFilterClass: (val: string) => void;
  sortBy: "year" | "price" | "none";
  setSortBy: (val: "year" | "price" | "none") => void;
}

export default function CarFilters({
  search,
  setSearch,
  filterClass,
  setFilterClass,
  sortBy,
  setSortBy,
}: CarFiltersProps) {
  return (
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
        onChange={(e) => setSortBy(e.target.value as "year" | "price" | "none")}
        className="border border-green-200 rounded-lg p-2"
      >
        <option value="none">No Sorting</option>
        <option value="year">Sort by Year</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
}
