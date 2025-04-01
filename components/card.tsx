interface CardProps {
  title: string;
  value: string;
  color?: string; // cor opcional
}

export function Card({ title, value, color = "bg-indigo-100 dark:bg-indigo-900" }: CardProps) {
  return (
    <div className={`rounded-xl p-4 md:p-6 border shadow-sm text-primary ${color} border-zinc-200 dark:border-zinc-700`}>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
