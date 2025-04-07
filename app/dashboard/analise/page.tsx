"use client";

import { useState } from "react";
import PeriodoFiltro from "@/components/PeriodoFiltro";
import GraficoRespostasHorario from "./grafico-respostas-horario";
import GraficoRespostasSemana from "./grafico-respostas-semana";
import GraficoReunioesHorario from "./grafico-reunioes-horario";
import GraficoReunioesSemana from "./grafico-reunioes-semana";
import GraficoConversaoMesmoDia from "./grafico-conversao";
import GraficoAgendadosMesmoDia from "./grafico-agendados-mesmo-dia";
import GraficoBarraExemplo from "./grafico-barra-exemplo";

export default function Analise() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Análise de Dados</h2>

      {/* Filtro geral para todos os gráficos */}
      <PeriodoFiltro dias={dias} onChange={setDias} />

      {/* Gráficos */}
      <GraficoRespostasHorario dias={dias} />
      <GraficoRespostasSemana dias={dias} />
      <GraficoReunioesHorario dias={dias} />
      <GraficoReunioesSemana dias={dias} />
      <GraficoConversaoMesmoDia dias={dias} />
      <GraficoAgendadosMesmoDia dias={dias} />
      {/*<GraficoBarraExemplo dias={dias} />*/}
    </div>
  );
}
