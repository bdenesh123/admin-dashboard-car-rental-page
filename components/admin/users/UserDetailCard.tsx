import { User, Car } from "@/lib/data";
import UserRoleBadge from "./UserRoleBadge";
import UserCarsList from "./UserCarsList";
import { useState } from "react";

type UserDetailCardProps = {
  user: User;
  userCars: Car[];
  onClose: () => void;
  onSave: (updatedUser: Partial<User>) => void;
  onDelete: () => void;
};

export default function UserDetailCard({
  user,
  userCars,
  onClose,
  onSave,
  onDelete,
}: UserDetailCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});

  const handleSave = () => {
    onSave(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl border border-green-100">
        <button
          onClick={onClose}
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
                value={editedUser.name ?? user.name}
                onChange={(e) =>
                  setEditedUser((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
              <input
                type="email"
                value={editedUser.email ?? user.email}
                onChange={(e) =>
                  setEditedUser((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              <input
                type="date"
                value={editedUser.dob ?? user.dob}
                onChange={(e) =>
                  setEditedUser((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <select
                value={editedUser.role ?? user.role}
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
              {user.name}
            </h2>
            <p className="text-slate-700 mb-1">
              Role: <UserRoleBadge role={user.role} />
            </p>
            <p className="text-slate-700 mb-1">Email: {user.email}</p>
            <p className="text-slate-700 mb-4">DOB: {user.dob}</p>

            <h3 className="font-semibold mb-2 text-slate-900">Cars Owned</h3>
            <UserCarsList cars={userCars} />

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
                onClick={onDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
