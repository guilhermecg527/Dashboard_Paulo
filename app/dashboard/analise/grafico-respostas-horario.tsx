
"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  hora: i.toString().padStart(2, "0") + ":00",
  respostas: Math.floor(Math.random() * 10)
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>Horário: {label}</strong></p>
        <p>Respostas: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoRespostasHorario() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">1. Respostas por Horário</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="hora" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="respostas" fill="#4f46e5">
            <LabelList dataKey="respostas" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
