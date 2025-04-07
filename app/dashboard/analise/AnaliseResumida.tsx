"use client";

import { useState } from "react";
import PeriodoFiltro from "@/components/PeriodoFiltro";

import GraficoRespostasHorario from "./grafico-respostas-horario";
import GraficoRespostasSemana from "./grafico-respostas-semana";
import GraficoReunioesHorario from "./grafico-reunioes-horario";
import GraficoReunioesSemana from "./grafico-reunioes-semana";
import GraficoConversaoMesmoDia from "./grafico-conversao";
import GraficoAgendadosMesmoDia from "./grafico-agendados-mesmo-dia";

export default function AnaliseResumida() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Análise Resumida</h2>

      <PeriodoFiltro dias={dias} onChange={setDias} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="rounded-xl border p-4">
          <GraficoRespostasHorario dias={dias} />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoRespostasSemana dias={dias} />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoReunioesHorario dias={dias} />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoReunioesSemana dias={dias} />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoConversaoMesmoDia dias={dias} />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoAgendadosMesmoDia dias={dias} />
        </div>
      </div>
    </div>
  );
}
