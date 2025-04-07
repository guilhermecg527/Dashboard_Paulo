"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const mockAgendamentos = [
  { nome: "Ana Pereira", data: "2025-04-02T10:00", cor: "bg-blue-500" },
  { nome: "Marcos Oliveira", data: "2025-04-02T14:00", cor: "bg-green-500" },
  { nome: "Juliana Costa", data: "2025-04-03T09:30", cor: "bg-yellow-500" },
  { nome: "Pedro Martins", data: "2025-04-04T16:00", cor: "bg-red-500" },
];

export default function Agenda() {
  const [eventos] = useState(mockAgendamentos);

  return (
    <div className="rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-4 text-gray-700 dark:text-gray-100">
      <h2 className="text-xl font-bold">Reuniões Agendadas</h2>
      {eventos.map((evento, index) => {
        const data = new Date(evento.data);
        const dataFormatada = format(data, "d 'de' MMMM 'de' yyyy", {
          locale: ptBR,
        });
        const hora = format(data, "HH:mm");

        return (
          <div key={index} className="flex items-center gap-4 border-t pt-4 first:border-t-0 first:pt-0">
            <div className={`w-3 h-3 rounded ${evento.cor}`} />
            <div className="flex-1">
              <div className="font-medium">{evento.nome}</div>
              <div className="text-sm text-gray-500">{dataFormatada}</div>
            </div>
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{hora}</div>
          </div>
        );
      })}
    </div>
  );
}
