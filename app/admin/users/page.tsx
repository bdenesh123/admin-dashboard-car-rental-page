// app/admin/users/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { users, cars } from "@/lib/data";

export default function UsersPage() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleSelectUser = (id: number) => setSelectedUserId(id);
  const handleClose = () => setSelectedUserId(null);

  const selectedUser = users.find((u) => u.id === selectedUserId);
  const userCars = selectedUser
    ? cars.filter((car) => car.id === selectedUserId) // mock: owner id = car id
    : [];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => handleSelectUser(user.id)}
          className="cursor-pointer border border-green-100 rounded-xl p-5 bg-white hover:shadow-lg transition shadow-sm"
        >
          <h2 className="font-bold text-lg text-slate-900">{user.name}</h2>
          <p className="text-slate-600">Role: {user.role}</p>
          <p className="text-slate-600">Email: {user.email}</p>
        </div>
      ))}

      {/* Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl border border-green-100">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-900 text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-1">
              {selectedUser.name}
            </h2>

            <p className="text-slate-700">Role: {selectedUser.role}</p>
            <p className="text-slate-700">Email: {selectedUser.email}</p>
            <p className="text-slate-700">DOB: {selectedUser.dob}</p>

            <h3 className="font-semibold mt-5 mb-2 text-slate-900">
              Cars Owned
            </h3>

            {userCars.length > 0 ? (
              <ul className="space-y-2">
                {userCars.map((car) => (
                  <li
                    key={car.id}
                    className="border border-green-100 p-3 rounded-lg bg-green-50 text-slate-800"
                  >
                    {car.make} {car.model} ({car.year})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500">No cars owned</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
