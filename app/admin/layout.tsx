"use client";

import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/lib/AuthContext";
import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import SidebarOverlay from "@/components/admin/SidebarOverlay";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-green-50 text-slate-900">
        <button
          className="absolute top-4 left-4 md:hidden z-50 p-2 rounded-md bg-white shadow-md"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu size={24} />
        </button>

        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          handleSignOut={handleSignOut}
        />

        <main className="flex-1 overflow-auto p-8 bg-green-50">{children}</main>

        <SidebarOverlay
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </ProtectedRoute>
  );
}
