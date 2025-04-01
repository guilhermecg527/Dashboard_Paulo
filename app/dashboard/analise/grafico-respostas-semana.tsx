
"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const data = [
  { dia: "Seg", respostas: 12 },
  { dia: "Ter", respostas: 15 },
  { dia: "Qua", respostas: 18 },
  { dia: "Qui", respostas: 10 },
  { dia: "Sex", respostas: 20 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{label}</strong></p>
        <p>Respostas: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoRespostasSemana() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">1. Respostas por Dia da Semana</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="respostas" fill="#6366f1">
            <LabelList dataKey="respostas" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
