"use client";

import { useState } from "react";
import { Card } from "@/components/card";
import PeriodoFiltro from "@/components/PeriodoFiltro";

export default function TempoEntreRespostaEAgendamento() {
  const [diasSelecionados, setDiasSelecionados] = useState(7);

  const tempoMedio = "3d 2h 27min"; // valor estático por enquanto

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Tempo entre Primeira Resposta e Agendamento</h3>

      <PeriodoFiltro dias={diasSelecionados} onChange={setDiasSelecionados} />

      <Card
        title="Tempo médio entre primeira resposta e agendamento de reunião:"
        value={tempoMedio}
      />
    </div>
  );
}
