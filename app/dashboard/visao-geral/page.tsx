import { Card } from "@/components/card";

export default function VisaoGeral() {
  return (
    <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-3">
      <Card title="Abordagens Realizadas" value="200" />
      <Card title="Respostas Recebidas" value="120" />
      <Card title="Leads Qualificados" value="60" />
      <Card title="Reuniões Agendadas" value="30" />
      <Card title="Taxa de Resposta" value="60%" />
      <Card title="Taxa de Conversão" value="12.5%" />
    </div>
  );
}
