"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiUsers,
  FiTruck,
  FiCheckSquare,
  FiHome,
  FiLogOut,
} from "react-icons/fi";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = () => {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("emailid");
    router.push("/");
  };

  const navLinks = [
    { title: "Dashboard", href: "/admin", icon: <FiHome size={20} /> },
    { title: "Users", href: "/admin/users", icon: <FiUsers size={20} /> },
    { title: "Cars", href: "/admin/cars", icon: <FiTruck size={20} /> },
    {
      title: "Availability",
      href: "/admin/availability",
      icon: <FiCheckSquare size={20} />,
    },
  ];

  return (
    <div className="flex h-screen bg-green-50 text-slate-900">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-green-100 flex flex-col shadow-sm">
        <div className="p-6 text-center border-b border-green-100">
          <h1 className="text-3xl font-extrabold tracking-tight text-green-700">
            SewaCar Admin
          </h1>
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
          <FiLogOut size={18} />
          Sign Out
        </button>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8 bg-green-50">{children}</main>
    </div>
  );
}
