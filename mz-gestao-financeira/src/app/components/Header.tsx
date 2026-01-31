import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold text-primary">
          Mz Gestão Financeira
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors duration-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/transactions" className="text-gray-700 hover:text-primary transition-colors duration-200">
                Transações
              </Link>
            </li>
            <li>
              <Link href="/reports" className="text-gray-700 hover:text-primary transition-colors duration-200">
                Relatórios
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-gray-700 hover:text-primary transition-colors duration-200">
                Perfil
              </Link>
            </li>
            <li>
              <Link href="/login" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
