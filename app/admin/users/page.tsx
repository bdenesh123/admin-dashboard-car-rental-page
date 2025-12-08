"use client";

import { useState } from "react";
import { users as initialUsers, cars, User, Car } from "@/lib/data";
import UserCard from "@/components/admin/users/UserCard";
import UserDetailCard from "@/components/admin/users/UserDetailCard";

export default function UsersPage() {
  const [userList, setUserList] = useState<User[]>(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  // Filter users based on search input
  const filteredUsers = userList.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectUser = (id: number) => setSelectedUserId(id);
  const handleClose = () => setSelectedUserId(null);

  const selectedUser: User | undefined = userList.find(
    (u) => u.id === selectedUserId
  );
  const userCars: Car[] = selectedUser
    ? cars.filter((c) => c.ownerId === selectedUserId)
    : [];

  const handleSave = (updatedUser: Partial<User>) => {
    if (!selectedUser) return;
    setUserList((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, ...updatedUser } : u))
    );
  };

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
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            cars={cars}
            onClick={() => handleSelectUser(user.id)}
          />
        ))}
      </div>

      {selectedUser && (
        <UserDetailCard
          user={selectedUser}
          userCars={userCars}
          onClose={handleClose}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
