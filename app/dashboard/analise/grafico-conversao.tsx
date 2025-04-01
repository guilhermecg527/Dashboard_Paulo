
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
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{label}</strong></p>
        <p>Leads mesmo dia: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoConversaoMesmoDia() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">3. Leads que Responderam no Mesmo Dia</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="leads" fill="#f59e0b">
            <LabelList dataKey="leads" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
