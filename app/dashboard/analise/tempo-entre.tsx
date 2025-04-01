
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = Array.from({ length: 10 }, (_, i) => ({
  dias: i,
  leads: Math.floor(Math.random() * 8) + 1,
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-2 rounded shadow text-sm border border-zinc-300 dark:border-zinc-700">
        <p><strong>{`Dia ${label}`}</strong></p>
        <p>{`Leads: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function TempoEntreRespostaEAgendamento() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">Tempo entre Resposta e Agendamento</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="dias" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2, fill: "#4f46e5", stroke: "#fff" }}
            name="Leads"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
