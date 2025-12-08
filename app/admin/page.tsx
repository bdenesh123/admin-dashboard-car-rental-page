"use client";

import { users, cars, availability } from "@/lib/data";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip as PieTooltip,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
} from "recharts";

export default function AdminHome() {
  const today = new Date().toISOString().split("T")[0];
  const availableCarsCount = availability.filter(
    (a) => !(a.start_at <= today && a.end_at >= today)
  ).length;

  const stats = [
    { title: "Users", total: users.length, color: "bg-blue-500" },
    { title: "Cars", total: cars.length, color: "bg-green-500" },
    {
      title: "Availability",
      total: availableCarsCount,
      color: "bg-yellow-500",
    },
  ];

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
        <header>
          <h2 className="text-4xl font-extrabold mb-2 text-slate-900">
            Welcome, Admin
          </h2>
          <p className="text-slate-600 text-lg">
            Manage users, cars, and availability easily from the sidebar.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition border border-green-100"
            >
              <div
                className={`w-12 h-12 mb-4 rounded-full ${stat.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
              >
                {stat.total}
              </div>

              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                {stat.title}
              </h3>

              <p className="text-slate-600">Total: {stat.total}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-slate-900">
              Users: Customers vs Employees
            </h3>
            <PieChart width={250} height={250}>
              <Pie
                data={userStats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {userStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <PieTooltip />
              <Legend />
            </PieChart>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <h3 className="font-semibold text-lg mb-4 text-slate-900">
              Cars by Class
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={carClassStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
