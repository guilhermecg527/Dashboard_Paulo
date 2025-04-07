"use client";

import { useState } from "react";
import PeriodoFiltro from "@/components/PeriodoFiltro";
import GraficoFunilConversao from "./grafico-funil";

export default function Funil() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Funil de Conversão</h3>
      
      <PeriodoFiltro dias={dias} onChange={setDias} />
      
      <GraficoFunilConversao />
    </div>
  );
}
