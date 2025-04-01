import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard Paulo",
  description: "Painel de Indicadores",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <aside className="w-64 bg-zinc-200 dark:bg-zinc-900 p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard">
              <h1 className="text-xl font-bold mb-4 hover:underline cursor-pointer">
                Dashboard
              </h1>
            </Link>
            <Link href="/dashboard/visao-geral" className="hover:underline">
              Visão Geral
            </Link>
            <Link href="/dashboard/funil" className="hover:underline">
              Funil
            </Link>
            <Link href="/dashboard/agenda" className="hover:underline">
              Agenda
            </Link>
            <Link href="/dashboard/analise" className="hover:underline">
              Análise
            </Link>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
