"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleUserRedirect = () => {
    window.open("https://car-rental-webpage-three.vercel.app/", "_blank");
  };

  const handleAdminRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Split-screen hero */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left panel */}
        <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-green-100">
          <h1 className="text-5xl font-extrabold text-green-700 mb-6">
            SewaCar
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            Welcome to the Car Rental System
          </h2>
          <p className="text-slate-700 text-lg mb-8">
            Select your portal to continue quickly and easily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={handleUserRedirect}
              className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md text-lg"
            >
              Continue as User
            </button>
            <button
              onClick={handleAdminRedirect}
              className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md text-lg"
            >
              Continue as Admin
            </button>
          </div>
        </div>

        {/* Right panel with illustration */}
        <div className="md:w-1/2 relative flex items-center justify-center p-6">
          <Image
            src="/car.png" // Replace with your own image
            alt="Car Rental Illustration"
            width={500}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
