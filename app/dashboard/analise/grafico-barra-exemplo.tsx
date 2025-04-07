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
import { useState } from "react";
import PeriodoFiltro from "@/components/PeriodoFiltro";

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
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{label}</strong></p>
        <p>{`Valor: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoBarraExemplo() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Exemplo com Tooltip e Destaque</h3>
      <PeriodoFiltro dias={dias} onChange={setDias} />

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="valor" fill="#374151">
            <LabelList dataKey="valor" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
