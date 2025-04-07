"use client";

import {
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
  Legend,  
} from "recharts";

const data = [
  { etapa: "Abordagens", valor: 200, fill: "url(#colorAbordagens)" },
  { etapa: "Respostas", valor: 120, fill: "url(#colorRespostas)" },
  { etapa: "Leads Qualificados", valor: 60, fill: "url(#colorLeads)" },
  { etapa: "Reuniões Agendadas", valor: 30, fill: "url(#colorReunioes)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded shadow text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100">
        <p><strong>{payload[0].payload.etapa}</strong></p>
        <p>{`Quantidade: ${payload[0].payload.valor}`}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoFunilConversao() {
  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Funil de Conversão</h3>
      <ResponsiveContainer width="100%" height={400}>
        <FunnelChart>
          <defs>
            <linearGradient id="colorAbordagens" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="colorRespostas" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="colorReunioes" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Funnel dataKey="valor" data={data} isAnimationActive>
            <LabelList dataKey="etapa" position="right" fill="#374151" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
