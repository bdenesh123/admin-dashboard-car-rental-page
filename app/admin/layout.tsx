"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Users, Car, CheckSquare, LogOut } from "lucide-react";
import {
  FiUsers,
  FiTruck,
  FiCheckSquare,
  FiHome,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/lib/AuthContext";
import { useState } from "react";
import { FaCar } from "react-icons/fa";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const navLinks = [
    { title: "Dashboard", href: "/admin", icon: <Home size={20} /> },
    { title: "Users", href: "/admin/users", icon: <Users size={20} /> },
    { title: "Cars", href: "/admin/cars", icon: <Car size={20} /> },
    {
      title: "Availability",
      href: "/admin/availability",
      icon: <CheckSquare size={20} />,
    },
  ];

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-green-50 text-slate-900">
        <button
          className="absolute top-4 left-4 md:hidden z-50 p-2 rounded-md bg-white shadow-md"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu size={24} />
        </button>

        <div
          className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-green-100 flex flex-col shadow-sm transform transition-transform duration-300
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:flex`}
        >
          <div className="p-6 text-center border-b border-green-100 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-green-700">
              SewaCar Admin
            </h1>

            <button
              className="md:hidden p-2 rounded-md hover:bg-green-50"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiX size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col p-4 gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-green-100 font-semibold text-green-700 shadow-sm"
                      : "hover:bg-green-50 font-medium text-slate-700"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </nav>

          <button
            onClick={handleSignOut}
            className="m-4 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl 
    flex items-center justify-center gap-2 
    hover:bg-red-500 hover:text-white 
    transition font-semibold shadow-sm"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        <main className="flex-1 overflow-auto p-8 bg-green-50">{children}</main>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
