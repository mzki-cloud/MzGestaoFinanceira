// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Importe o Navbar
import { SYSTEM_BLUEPRINT } from '@/lib/constants'; // Importe a blueprint


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SYSTEM_BLUEPRINT.name,
  description: SYSTEM_BLUEPRINT.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar /> {/* Inclua o Navbar aqui */}
          <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
            {children}
          </main>
          {/* Opcional: Footer */}
          {/* <footer className="bg-gray-100 py-4 text-center text-gray-600">
            <p>&copy; {SYSTEM_BLUEPRINT.year_default} {SYSTEM_BLUEPRINT.name}. Todos os direitos reservados.</p>
          </footer> */}
        </div>
      </body>
    </html>
  );
}
