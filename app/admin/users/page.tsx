"use client";

import { useState } from "react";
import { users as initialUsers, cars, User, Car } from "@/lib/data";

export default function UsersPage() {
  // To hold the list of users
  const [userList, setUserList] = useState<User[]>(initialUsers);

  // To keep track of the selected user for detail view
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // For search input
  const [search, setSearch] = useState("");

  // For sorting users
  const [sortBy, setSortBy] = useState("nameAsc");

  const [isEditing, setIsEditing] = useState(false);

  // To temporarily store edited user data
  const [editedUser, setEditedUser] = useState<Partial<User>>({});

  // Filter users based on search input (name, email, or role)
  const filteredUsers = userList.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  // Sort filtered users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "nameAsc") return a.name.localeCompare(b.name);
    if (sortBy === "nameDesc") return b.name.localeCompare(a.name);
    if (sortBy === "role") return a.role.localeCompare(b.role);
    return 0;
  });

  // To select user from the grid
  const handleSelectUser = (id: number) => {
    setSelectedUserId(id);
    setIsEditing(false);
  };

  // To close detail view
  const handleClose = () => {
    setSelectedUserId(null);
    setIsEditing(false);
  };

  // To find currently selected user
  const selectedUser: User | undefined = userList.find(
    (u) => u.id === selectedUserId
  );

  // To get cars owned by selected user
  const userCars: Car[] = selectedUser
    ? cars.filter((car) => car.ownerId === selectedUserId)
    : [];

  // For saving edited user data
  const handleSave = () => {
    if (!selectedUser) return;
    setUserList((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, ...editedUser } : u))
    );
    setIsEditing(false);
  };

  // For deleting a user
  const handleDelete = () => {
    if (!selectedUser) return;
    if (!confirm(`Are you sure you want to delete ${selectedUser.name}?`))
      return;
    setUserList((prev) => prev.filter((u) => u.id !== selectedUser.id));
    handleClose();
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Search users by name, email, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedUsers.map((user) => {
          const carsOwned = cars.filter((c) => c.ownerId === user.id).length;
          return (
            <div
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
              className={`cursor-pointer border rounded-xl p-5 bg-white hover:shadow-lg transition shadow-sm ${
                user.role === "Employee"
                  ? "border-green-300"
                  : "border-gray-200"
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
                <h2 className="font-bold text-lg text-slate-900">
                  {user.name}
                </h2>
              </div>

              <p
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-1 ${
                  user.role === "Employee"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {user.role}
              </p>

              <p className="text-slate-600 text-sm">Email: {user.email}</p>
              <p className="text-slate-600 text-sm">DOB: {user.dob}</p>
              <p className="text-slate-600 text-sm">Cars Owned: {carsOwned}</p>
            </div>
          );
        })}
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl border border-green-100">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-900 text-lg"
            >
              ✕
            </button>

            {isEditing ? (
              <>
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  Edit User
                </h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editedUser.name ?? selectedUser.name}
                    onChange={(e) =>
                      setEditedUser((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    value={editedUser.email ?? selectedUser.email}
                    onChange={(e) =>
                      setEditedUser((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Email"
                  />
                  <input
                    type="date"
                    value={editedUser.dob ?? selectedUser.dob}
                    onChange={(e) =>
                      setEditedUser((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <select
                    value={editedUser.role ?? selectedUser.role}
                    onChange={(e) =>
                      setEditedUser((prev) => ({
                        ...prev,
                        role: e.target.value as "Customer" | "Employee",
                      }))
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="Customer">Customer</option>
                    <option value="Employee">Employee</option>
                  </select>

                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  {selectedUser.name}
                </h2>

                <p className="text-slate-700 mb-1">
                  Role:{" "}
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      selectedUser.role === "Employee"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {selectedUser.role}
                  </span>
                </p>
                <p className="text-slate-700 mb-1">
                  Email: {selectedUser.email}
                </p>
                <p className="text-slate-700 mb-4">DOB: {selectedUser.dob}</p>

                <h3 className="font-semibold mb-2 text-slate-900">
                  Cars Owned
                </h3>
                <div className="max-h-[40vh] overflow-y-auto space-y-2">
                  {userCars.length > 0 ? (
                    userCars.map((car) => (
                      <div
                        key={car.id}
                        className="border border-green-100 p-3 rounded-lg bg-green-50"
                      >
                        <p className="font-semibold text-slate-800">
                          {car.make} {car.model} ({car.year})
                        </p>
                        <p className="text-sm text-slate-600">
                          Location: {car.location} | RM{car.dayPrice}/day
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">No cars owned</p>
                  )}
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditedUser({});
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
