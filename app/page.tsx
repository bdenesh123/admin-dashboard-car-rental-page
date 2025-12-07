"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleUserRedirect = () => {
    window.open("https://car-rental-webpage-three.vercel.app/", "_blank");
  };

  const handleAdminRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-zinc-900 px-4">
      {/* Main card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-12 sm:p-16 text-center space-y-6 flex flex-col justify-center">
          {/* Branding */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700">
            SewaCar
          </h1>

          {/* Welcome text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Welcome to the Car Rental System
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Select your portal to continue
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              onClick={handleUserRedirect}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-green-600 transition shadow-md whitespace-nowrap text-lg sm:text-xl"
            >
              Continue as User
            </button>
            <button
              onClick={handleAdminRedirect}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-green-600 transition shadow-md whitespace-nowrap text-lg sm:text-xl"
            >
              Continue as Admin
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 px-6 py-4 text-center text-sm">
        &copy; 2025 SewaCar. All rights reserved.
      </footer>
    </div>
  );
}
