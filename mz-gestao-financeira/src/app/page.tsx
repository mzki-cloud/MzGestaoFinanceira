import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <h1 className="text-5xl font-display font-bold text-dark mb-8 text-center">
        Bem-vindo ao Mz Gestão Financeira
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl">
        Organize suas finanças, planeje seu futuro e alcance seus objetivos com nossa plataforma intuitiva e poderosa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <Card className="p-6 shadow-airbnb">
          <h2 className="text-2xl font-display font-semibold text-primary mb-4">Controle de Gastos</h2>
          <p className="text-gray-700 mb-4">
            Monitore suas despesas diárias e saiba exatamente para onde seu dinheiro está indo.
          </p>
          <Button variant="primary" className="w-full">Ver Gastos</Button>
        </Card>

        <Card className="p-6 shadow-airbnb">
          <h2 className="text-2xl font-display font-semibold text-secondary mb-4">Planejamento de Orçamento</h2>
          <p className="text-gray-700 mb-4">
            Crie orçamentos personalizados e mantenha suas finanças sob controle.
          </p>
          <Button variant="secondary" className="w-full">Criar Orçamento</Button>
        </Card>

        <Card className="p-6 shadow-airbnb">
          <h2 className="text-2xl font-display font-semibold text-dark mb-4">Metas Financeiras</h2>
          <p className="text-gray-700 mb-4">
            Defina e acompanhe suas metas de economia e investimento.
          </p>
          <Button variant="outline" className="w-full">Definir Metas</Button>
        </Card>
      </div>

      <div className="mt-16 w-full max-w-md">
        <h2 className="text-3xl font-display font-semibold text-dark mb-6 text-center">Comece Agora!</h2>
        <form className="bg-white p-8 rounded-lg shadow-airbnb">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="w-full"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-3 text-lg">
            Cadastrar / Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
