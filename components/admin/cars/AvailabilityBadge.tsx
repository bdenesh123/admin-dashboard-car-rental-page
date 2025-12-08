"use client";

interface AvailabilityBadgeProps {
  isAvailable: boolean;
  position?: "top-left" | "top-right";
  className?: string;
}

export default function AvailabilityBadge({
  isAvailable,
  position = "top-right",
  className = "",
}: AvailabilityBadgeProps) {
  const positionClass =
    position === "top-left"
      ? "absolute top-3 left-3"
      : "absolute top-3 right-3";

  return (
    <div
      className={`${positionClass} px-2 py-1 rounded-full text-xs font-semibold z-10 shadow-sm ${
        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      } ${className}`}
    >
      {isAvailable ? "Available" : "Booked"}
    </div>
  );
}
