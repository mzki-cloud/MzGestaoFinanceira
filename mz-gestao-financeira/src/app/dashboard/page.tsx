// src/app/dashboard/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import FinancialThermometer from '../components/FinancialThermometer'; // Caminho corrigido

const DashboardPage = () => {
  // Exemplo de dados para o termômetro financeiro
  const incomeThermometer = {
    currentValue: 3500,
    targetValue: 5000,
    label: 'Meta de Receita Mensal',
  };

  const expenseThermometer = {
    currentValue: 1800,
    targetValue: 2000,
    label: 'Controle de Despesas Mensais',
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-dark mb-8">Dashboard Financeiro</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Saldo Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-mz-blue">R$ 7.500,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Receitas do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-mz-green">R$ 4.200,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Despesas do Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-mz-red">R$ 2.100,00</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FinancialThermometer {...incomeThermometer} />
        <FinancialThermometer {...expenseThermometer} />
      </div>

      {/* Adicione mais seções do dashboard aqui */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Visão Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Detalhes adicionais e gráficos virão aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
