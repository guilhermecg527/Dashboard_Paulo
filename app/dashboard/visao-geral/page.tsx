"use client";

import { useState } from "react";
import { Card } from "@/components/card";
import PeriodoFiltro from "@/components/PeriodoFiltro";

export default function VisaoGeral() {
  const [dias, setDias] = useState(7);

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Visão Geral</h3>

      {/* Filtro de período */}
      <PeriodoFiltro dias={dias} onChange={setDias} />

      {/* Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card title="Abordagens Realizadas" value="200" />
        <Card title="Respostas Recebidas" value="120" />
        <Card title="Leads Qualificados" value="60" />
        <Card title="Reuniões Agendadas" value="30" />
        <Card 
          title="Taxa de Resposta" 
          value="60%" 
          tooltip="% de respostas sobre as abordagens" 
        />
        <Card 
          title="Abordados x Interessados" 
          value="20%" 
          tooltip="% de interessados sobre as abordagens"
        />
        <Card 
          title="Interessados x Agendamentos" 
          value="40%" 
          tooltip="% de reuniões agendadas sobre os interessados" 
        />
        <Card 
          title="Taxa de Conversão" 
          value="12.5%" 
          tooltip="% de reuniões agendadas sobre as abordagens" 
        />
        <Card 
          title="Resposta e Agendamento" 
          value="3d 2h 27min" 
          tooltip="Tempo médio entre primeira resposta e agendamento de reunião" 
        />
      </div>
    </div>
  );
}
