// src/app/dashboard/page.tsx
import { SYSTEM_BLUEPRINT, MonthData } from '@/lib/constants'; // Importe a blueprint e os tipos
import FinancialSummary from '../components/FinancialSummary';
import CategoryChart from '../components/CategoryChart';
import FinancialThermometer from '../components/FinancialThermometer';
import MonthlyGoals from '../components/MonthlyGoals';

// Simulação de dados do mês atual (você buscará isso de um contexto ou API real)
const currentMonthData: MonthData = SYSTEM_BLUEPRINT.data.Jan; // Exemplo para Janeiro

export default function DashboardPage() {
  const selectedMonth = "Janeiro"; // Isso viria do estado global ou URL
  const selectedYear = SYSTEM_BLUEINT.year_default;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Dashboard - {selectedMonth} de {selectedYear}
      </h1>

      {/* Resumo Financeiro */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FinancialSummary
          title="Receitas Totais"
          value={currentMonthData.income.total}
          currency={SYSTEM_BLUEPRINT.currency}
          type="income"
        />
        <FinancialSummary
          title="Gastos Fixos"
          value={currentMonthData.fixed_expenses.total}
          currency={SYSTEM_BLUEPRINT.currency}
          type="expense"
        />
        <FinancialSummary
          title="Gastos Variáveis"
          value={currentMonthData.variable_expenses.total}
          currency={SYSTEM_BLUEPRINT.currency}
          type="expense"
        />
        <FinancialSummary
          title="Balanço do Mês"
          value={currentMonthData.income.total - (currentMonthData.fixed_expenses.total + currentMonthData.variable_expenses.total)}
          currency={SYSTEM_BLUEPRINT.currency}
          type="balance"
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico de Gastos por Categoria */}
        <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Gráfico de Gastos por Categoria</h2>
          <CategoryChart /> {/* Este componente precisaria de dados reais de categorias e valores */}
        </section>

        {/* Termômetro Financeiro */}
        <section className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Termômetro Financeiro</h2>
          <FinancialThermometer status={currentMonthData.thermometer} />
        </section>
      </div>

      {/* Metas do Mês */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Metas do Mês</h2>
        <MonthlyGoals
          balanceSplit={currentMonthData.balance}
          currency={SYSTEM_BLUEPRINT.currency}
        />
      </section>
    </div>
  );
}
