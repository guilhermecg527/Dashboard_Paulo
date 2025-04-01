
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
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{label}</strong></p>
        <p>Agendamentos: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoAgendadosMesmoDia() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">4. Leads que Responderam e Agendaram no Mesmo Dia</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="agendados" fill="#f97316">
            <LabelList dataKey="agendados" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
