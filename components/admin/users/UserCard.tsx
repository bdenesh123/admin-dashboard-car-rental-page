import UserRoleBadge from "./UserRoleBadge";
import { User, Car } from "@/lib/data";

type UserCardProps = {
  user: User;
  cars: Car[];
  onClick: () => void;
};

export default function UserCard({ user, cars, onClick }: UserCardProps) {
  const carsOwned = cars.filter((c) => c.ownerId === user.id).length;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-xl p-5 bg-white hover:shadow-lg transition shadow-sm ${
        user.role === "Employee" ? "border-green-300" : "border-gray-200"
      }`}
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold mr-3">
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
        <h2 className="font-bold text-lg text-slate-900">{user.name}</h2>
      </div>

      <UserRoleBadge role={user.role} />

      <p className="text-slate-600 text-sm">Email: {user.email}</p>
      <p className="text-slate-600 text-sm">DOB: {user.dob}</p>
      <p className="text-slate-600 text-sm">Cars Owned: {carsOwned}</p>
    </div>
  );
}
