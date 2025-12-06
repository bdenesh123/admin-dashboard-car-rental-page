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
          className="cursor-pointer border rounded-lg p-4 bg-white dark:bg-gray-800"
        >
          <h2 className="font-bold">{user.name}</h2>
          <p>Role: {user.role}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}

      {/* Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-xl w-full p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold">{selectedUser.name}</h2>
            <p>Role: {selectedUser.role}</p>
            <p>Email: {selectedUser.email}</p>
            <p>DOB: {selectedUser.dob}</p>

            <h3 className="font-semibold mt-4">Cars Owned</h3>
            {userCars.length > 0 ? (
              <ul className="space-y-2">
                {userCars.map((car) => (
                  <li key={car.id} className="border p-2 rounded">
                    {car.make} {car.model} ({car.year})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No cars owned</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
