
"use client";

import VisaoGeral from "./visao-geral/page";
import GraficoRespostasHorario from "./analise/grafico-respostas-horario";
import GraficoRespostasSemana from "./analise/grafico-respostas-semana";
import GraficoReunioesHorario from "./analise/grafico-reunioes-horario";
import GraficoReunioesSemana from "./analise/grafico-reunioes-semana";
import GraficoConversaoMesmoDia from "./analise/grafico-conversao";
import GraficoAgendadosMesmoDia from "./analise/grafico-agendados-mesmo-dia";
import TempoEntreRespostaEAgendamento from "./analise/tempo-entre";
import Agenda from "./agenda/page";
import Funil from "./funil/page";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-10">
      {/* Primeira linha: Visão Geral e Agenda lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Visão Geral */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">Visão Geral</h2>
          <VisaoGeral />
        </div>

        {/* Agenda */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">Agenda</h2>
          <Agenda />
        </div>
      </div>


      {/* Funil centralizado */}
      <div className="rounded-xl border p-4">
        <h2 className="text-lg font-bold mb-4">Funil de Conversão</h2>
        <Funil />
      </div>

      {/* Grade com os 6 gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-xl border p-4">
          <GraficoRespostasHorario />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoRespostasSemana />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoReunioesHorario />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoReunioesSemana />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoConversaoMesmoDia />
        </div>
        <div className="rounded-xl border p-4">
          <GraficoAgendadosMesmoDia />
        </div>
      </div>

      {/* Último gráfico em destaque */}
      <div className="rounded-xl border p-4">
        <TempoEntreRespostaEAgendamento />
      </div>
    </div>
  );
}
