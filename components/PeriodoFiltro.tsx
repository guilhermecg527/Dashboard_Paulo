"use client";

import { useState } from "react";

type PeriodoFiltroProps = {
  dias: number;
  onChange: (novoValor: number) => void;
};

export default function PeriodoFiltro({ dias, onChange }: PeriodoFiltroProps) {
  const opcoes = [3, 7, 15, 30];

  return (
    <div className="flex gap-2 mb-4">
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          onClick={() => onChange(opcao)}
          className={`px-3 py-1 rounded text-sm border transition-colors ${
            dias === opcao
              ? "bg-gray-700 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100"
          }`}
        >
          Últimos {opcao} dias
        </button>
      ))}
    </div>
  );
}
