import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";


export const metadata = {
  title: "AutoClient",
  description: "Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="flex h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <aside className="w-64 bg-zinc-200 dark:bg-zinc-900 p-4">
          <nav className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-4">
              <Link href="/dashboard">
                <h1 className="text-xl font-bold hover:underline cursor-pointer">
                  Dashboard
                </h1>
              </Link>
              <ThemeToggle />
            </div>

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
          <main className="flex-1 overflow-y-auto bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-white">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
