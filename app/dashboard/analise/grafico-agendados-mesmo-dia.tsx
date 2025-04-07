"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const data = [
  { dia: "Seg", agendados: 3 },
  { dia: "Ter", agendados: 4 },
  { dia: "Qua", agendados: 5 },
  { dia: "Qui", agendados: 1 },
  { dia: "Sex", agendados: 7 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{label}</strong></p>
        <p>Agendamentos: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoAgendadosMesmoDia({ dias }: { dias: number }) {
  // "dias" poderá ser usado futuramente para filtrar dados reais

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">4. Leads que Responderam e Agendaram no Mesmo Dia</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="agendados" fill="#4b5563">
            <LabelList dataKey="agendados" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
