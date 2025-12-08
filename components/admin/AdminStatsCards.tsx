import { ReactNode } from "react";

type Stat = {
  title: string;
  total: number;
  color: string;
  icon: ReactNode;
};

type AdminStatsCardsProps = {
  stats: Stat[];
};

export default function AdminStatsCards({ stats }: AdminStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition border border-green-100"
        >
          <div
            className={`w-12 h-12 mb-4 rounded-full ${stat.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
          >
            {stat.icon}
          </div>

          <h3 className="text-xl font-semibold mb-1 text-slate-900">
            {stat.title}
          </h3>

          <p className="text-slate-600">Total: {stat.total}</p>
        </div>
      ))}
    </div>
  );
}
