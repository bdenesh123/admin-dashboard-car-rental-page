type CarAvailabilityBadgeProps = {
  isAvailable: boolean;
};

export default function CarAvailabilityBadge({
  isAvailable,
}: CarAvailabilityBadgeProps) {
  return (
    <div
      className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-sm ${
        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isAvailable ? "Available" : "Booked"}
    </div>
  );
}
