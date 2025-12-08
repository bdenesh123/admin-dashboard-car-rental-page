"use client";

import AvailabilityHeader from "@/components/admin/availability/AvailabilityHeader";
import AvailabilityTable from "@/components/admin/availability/AvailabilityTable";

export default function AvailabilityPage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="overflow-x-auto bg-white rounded-2xl p-6 shadow-lg border border-green-100">
      <AvailabilityHeader />
      <AvailabilityTable today={today} />
    </div>
  );
}
