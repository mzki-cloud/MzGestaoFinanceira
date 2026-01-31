export function Footer() {
  return (
    <footer className="bg-dark text-white py-8 px-6 mt-auto">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mz Gestão Financeira. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Desenvolvido com ❤️ por CodeMaster AI.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary transition-colors duration-200">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors duration-200">Contato</a>
        </div>
      </div>
    </footer>
  );
}
