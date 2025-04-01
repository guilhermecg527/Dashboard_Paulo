
import { Card } from "@/components/card";


export default function VisaoGeral() {
  return (
    <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-3">
      <Card title="Abordagens Realizadas" value="200" color="bg-indigo-100 dark:bg-indigo-900" />
      <Card title="Respostas Recebidas" value="120" color="bg-blue-100 dark:bg-blue-900" />
      <Card title="Leads Qualificados" value="60" color="bg-emerald-100 dark:bg-emerald-900" />
      <Card title="Reuniões Agendadas" value="30" color="bg-yellow-100 dark:bg-yellow-800" />
      <Card title="Taxa de Resposta" value="60%" />
      <Card title="Taxa de Conversão" value="12.5%" />
    </div>
  );
}
