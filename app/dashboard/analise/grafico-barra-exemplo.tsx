
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { label: "Seg", valor: 12 },
  { label: "Ter", valor: 15 },
  { label: "Qua", valor: 18 },
  { label: "Qui", valor: 10 },
  { label: "Sex", valor: 20 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{label}</strong></p>
        <p>{`Valor: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoBarraExemplo() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">Exemplo com Tooltip e Destaque</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="valor" fill="#4f46e5">
            <LabelList dataKey="valor" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
