"use client";

import VisaoGeral from "./visao-geral/page";
import AnaliseResumida from "./analise/AnaliseResumida";
import Agenda from "./agenda/page";
import Funil from "./funil/page";


export default function Dashboard() {


  return (
    <div className="p-6 space-y-10">
      {/* Primeira linha: Visão Geral e Agenda lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Visão Geral */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">

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

        <Funil />
      </div>
        <div className="rounded-xl border p-4">
          <AnaliseResumida />
        </div>
    </div>
  );
}
