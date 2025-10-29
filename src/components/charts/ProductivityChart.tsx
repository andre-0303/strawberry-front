"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", kg: 800 },
  { name: "Fev", kg: 1250 },
  { name: "Mar", kg: 980 },
  { name: "Abr", kg: 1600 },
  { name: "Mai", kg: 1450 },
  { name: "Jun", kg: 1820 },
];

export function ProductivityChart() {
  return (
    <div className="w-full h-[400px] bg-white shadow-sm rounded-xl p-4 border">
      <h2 className="text-lg font-semibold text-pink-700 mb-4">
        Produtividade por Período
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="name" tick={{ fill: "#666" }} />
          <YAxis tick={{ fill: "#666" }} />
          <Tooltip cursor={{ fill: "#fce7f3" }} />
          <Bar dataKey="kg" fill="#ec4899" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
