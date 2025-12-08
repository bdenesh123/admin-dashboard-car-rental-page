"use client";

import { users, cars, availability } from "@/lib/data";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Car, CheckSquare, Users } from "lucide-react";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminStatsCards from "@/components/admin/AdminStatsCards";
import UsersPieChart from "@/components/admin/UsersPieChart";
import CarsBarChart from "@/components/admin/CarsBarChart";

export default function AdminHome() {
  const today = new Date().toISOString().split("T")[0];

  // Count available cars by checking incase they are not booked today
  const availableCarsCount = availability.filter(
    (a) => !(a.start_at <= today && a.end_at >= today)
  ).length;

  // Stats for the top summary cards
  const stats = [
    {
      title: "Users",
      total: users.length,
      color: "bg-blue-500",
      icon: <Users size={24} />,
    },
    {
      title: "Cars",
      total: cars.length,
      color: "bg-green-500",
      icon: <Car size={24} />,
    },
    {
      title: "Availability",
      total: availableCarsCount,
      color: "bg-yellow-500",
      icon: <CheckSquare size={24} />,
    },
  ];

  // Pie chart data
  const userStats = [
    {
      name: "Customers",
      value: users.filter((u) => u.role === "Customer").length,
    },
    {
      name: "Employees",
      value: users.filter((u) => u.role === "Employee").length,
    },
  ];

  const pieColors = ["#0088FE", "#00C49F"];

  // Bar chart data
  const carClassStats = [
    { class: "Sedan", value: cars.filter((c) => c.class === "sedan").length },
    { class: "SUV", value: cars.filter((c) => c.class === "suv").length },
    {
      class: "Hatchback",
      value: cars.filter((c) => c.class === "hatchback").length,
    },
    {
      class: "Electric",
      value: cars.filter((c) => c.class === "electric").length,
    },
  ];

  return (
    <ProtectedRoute>
      <div className="space-y-10">
        <AdminHeader />

        <AdminStatsCards stats={stats} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <UsersPieChart userStats={userStats} pieColors={pieColors} />
          <CarsBarChart carClassStats={carClassStats} />
        </div>
      </div>
    </ProtectedRoute>
  );
}
