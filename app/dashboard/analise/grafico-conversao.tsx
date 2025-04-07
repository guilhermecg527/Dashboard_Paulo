"use client";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from "recharts";

const data = [
  { dia: "Seg", leads: 5 },
  { dia: "Ter", leads: 7 },
  { dia: "Qua", leads: 8 },
  { dia: "Qui", leads: 2 },
  { dia: "Sex", leads: 10 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{label}</strong></p>
        <p>Leads mesmo dia: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoConversaoMesmoDia({ dias }: { dias: number }) {
  // "dias" poderá ser usado futuramente para filtrar dados reais

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">3. Leads que Responderam no Mesmo Dia</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="leads" fill="#6b7280">
            <LabelList dataKey="leads" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
