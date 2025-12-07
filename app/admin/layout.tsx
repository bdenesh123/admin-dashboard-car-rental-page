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
    <div className="flex h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-zinc-900 border-r dark:border-gray-800 flex flex-col">
        <div className="p-6 text-center border-b dark:border-gray-800">
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
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-green-100 dark:bg-green-900 font-semibold text-green-700 dark:text-green-400"
                    : "hover:bg-gray-200 dark:hover:bg-zinc-800 font-medium"
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
          className="m-4 px-4 py-3 bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition font-semibold"
        >
          <FiLogOut size={18} />
          Sign Out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8 bg-gray-100 dark:bg-zinc-900">
        {children}
      </main>
    </div>
  );
}
