
"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const data = [
  { dia: "Seg", reunioes: 6 },
  { dia: "Ter", reunioes: 7 },
  { dia: "Qua", reunioes: 10 },
  { dia: "Qui", reunioes: 4 },
  { dia: "Sex", reunioes: 12 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{label}</strong></p>
        <p>Reuniões: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoReunioesSemana() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">2. Reuniões por Dia da Semana</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="reunioes" fill="#10b981">
            <LabelList dataKey="reunioes" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
