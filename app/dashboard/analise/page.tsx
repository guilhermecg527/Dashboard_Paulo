
"use client";

import TempoEntreRespostaEAgendamento from "./tempo-entre";
import GraficoRespostasHorario from "./grafico-respostas-horario";
import GraficoReunioesSemana from "./grafico-reunioes-semana";
import GraficoConversaoMesmoDia from "./grafico-conversao";
import GraficoAgendadosMesmoDia from "./grafico-agendados-mesmo-dia";
import GraficoRespostasSemana from "./grafico-respostas-semana";
import GraficoReunioesHorario from "./grafico-reunioes-horario";


export default function Analise() {
  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-bold mb-4">Análise de Desempenho</h2>

      <GraficoRespostasHorario />
      <GraficoRespostasSemana />
      <GraficoReunioesHorario />
      <GraficoReunioesSemana />
      <GraficoConversaoMesmoDia />
      <GraficoAgendadosMesmoDia />
      <TempoEntreRespostaEAgendamento />


    </div>
  );
}
