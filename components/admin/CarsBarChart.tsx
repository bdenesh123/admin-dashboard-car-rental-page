import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type CarClassStat = {
  class: string;
  value: number;
};

type CarsBarChartProps = {
  carClassStats: CarClassStat[];
};

export default function CarsBarChart({ carClassStats }: CarsBarChartProps) {
  return (
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
  );
}
