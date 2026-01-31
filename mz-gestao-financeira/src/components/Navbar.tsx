// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SYSTEM_BLUEPRINT } from '@/lib/constants'; // Importe a blueprint

export default function Navbar() {
  const pathname = usePathname();
  const currentYear = SYSTEM_BLUEPRINT.year_default; // Usando o ano padrão da blueprint

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between">
      {/* Logo/Nome do Sistema */}
      <Link href="/dashboard" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-indigo-600">Mz</span>
        <span className="text-xl font-semibold text-gray-800">Gestão Financeira</span>
      </Link>

      {/* Navegação Principal (visível em telas maiores) */}
      <div className="hidden md:flex items-center space-x-6">
        {SYSTEM_BLUEPRINT.pages.map((page) => (
          <Link
            key={page.id}
            href={`/${page.id}`}
            className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${
              pathname.startsWith(`/${page.id}`) ? 'font-bold text-indigo-600' : ''
            }`}
          >
            {page.title}
          </Link>
        ))}
      </div>

      {/* Seletor de Mês/Ano (Exemplo - pode ser um componente separado) */}
      <div className="flex items-center space-x-4">
        <select className="border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {SYSTEM_BLUEPRINT.months.map((month) => (
            <option key={month} value={month.toLowerCase()}>{month}</option>
          ))}
        </select>
        <span className="text-gray-700 font-medium">{currentYear}</span>
        {/* Ícone de perfil ou menu mobile */}
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {/* Ícone de menu hambúrguer */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
