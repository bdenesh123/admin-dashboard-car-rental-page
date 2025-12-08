"use client";

import { useRouter } from "next/navigation";
import HomeContent from "@/components/home/HomeContent";
import HomeImage from "@/components/home/HomeImage";
import Footer from "@/components/layout/Footer";

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
      <div className="flex flex-1 flex-col md:flex-row">
        <HomeContent
          handleUserRedirect={handleUserRedirect}
          handleAdminRedirect={handleAdminRedirect}
        />
        <HomeImage />
      </div>

      <Footer />
    </div>
  );
}
