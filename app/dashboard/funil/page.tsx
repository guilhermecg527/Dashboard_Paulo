
"use client";
import GraficoFunilConversao from "./grafico-funil";


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

const data = [
  { etapa: "Abordagens", valor: 200 },
  { etapa: "Respostas", valor: 120 },
  { etapa: "Leads Qualificados", valor: 60 },
  { etapa: "Reuniões", valor: 25 },
];

export default function Funil() {
  return (
    <div className="p-6">
      <GraficoFunilConversao />

    </div>
  );
}
