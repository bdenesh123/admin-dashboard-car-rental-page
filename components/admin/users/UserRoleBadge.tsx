type UserRoleBadgeProps = {
  role: "Customer" | "Employee";
};

export default function UserRoleBadge({ role }: UserRoleBadgeProps) {
  const bgClass =
    role === "Employee"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";
  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${bgClass}`}
    >
      {role}
    </span>
  );
}
