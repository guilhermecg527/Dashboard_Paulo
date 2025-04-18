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
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{label}</strong></p>
        <p>Respostas: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoRespostasSemana({ dias }: { dias: number }) {
  // Aqui você poderá usar a variável "dias" para ajustar os dados futuramente

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">2. Respostas por Dia da Semana</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="respostas" fill="#6b7280">
            <LabelList dataKey="respostas" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
