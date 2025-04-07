interface CardProps {
  title: string;
  value: string;
  color?: string; // cor opcional
}

export function Card({ title, value, color = "bg-gray-100 dark:bg-gray-800" }: CardProps) {
  return (
    <div className={`rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-100 ${color}`}>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}