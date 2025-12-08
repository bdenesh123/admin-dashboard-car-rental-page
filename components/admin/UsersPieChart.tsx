import { PieChart, Pie, Cell, Legend, Tooltip as PieTooltip } from "recharts";

type UserStat = {
  name: string;
  value: number;
};

type UsersPieChartProps = {
  userStats: UserStat[];
  pieColors: string[];
};

export default function UsersPieChart({
  userStats,
  pieColors,
}: UsersPieChartProps) {
  return (
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
  );
}
