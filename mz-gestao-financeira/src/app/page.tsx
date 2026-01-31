import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-mz-blue">Mz Gestão Financeira</CardTitle>
          <CardDescription className="mt-2 text-gray-dark">
            Organize suas finanças de forma inteligente e intuitiva.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-dark mb-1">
              Senha
            </label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <Button className="w-full">Entrar</Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-center">
          <p className="text-sm text-gray-dark">
            Não tem uma conta?{' '}
            <Link href="/signup" className="text-mz-blue hover:underline">
              Cadastre-se
            </Link>
          </p>
          <Link href="/dashboard" className="text-sm text-mz-blue hover:underline">
            Ir para o Dashboard (apenas para teste)
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
