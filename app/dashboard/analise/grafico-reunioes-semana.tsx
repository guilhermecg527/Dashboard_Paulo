"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";
import { useState } from "react";
import PeriodoFiltro from "@/components/PeriodoFiltro";

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
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{label}</strong></p>
        <p>Reuniões: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoReunioesSemana() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">2. Reuniões por Dia da Semana</h3>
      <PeriodoFiltro dias={dias} onChange={setDias} />

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="reunioes" fill="#374151">
            <LabelList dataKey="reunioes" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
