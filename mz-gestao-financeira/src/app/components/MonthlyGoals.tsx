import { MonthData } from '@/lib/constants';

interface MonthlyGoalsProps {
  balanceSplit: MonthData['balance'];
  currency: string;
}

export default function MonthlyGoals({ balanceSplit, currency }: MonthlyGoalsProps) {
  const { renda, necessidades, desejos, poupanca, investimento } = balanceSplit;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-semibold text-gray-700">Renda Mensal</h4>
          <p className="text-lg text-gray-900">{currency} {renda.toFixed(2).replace('.', ',')}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-semibold text-gray-700">Necessidades (50%)</h4>
          <p className="text-lg text-gray-900">{currency} {(renda * necessidades).toFixed(2).replace('.', ',')}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-semibold text-gray-700">Desejos (20%)</h4>
          <p className="text-lg text-gray-900">{currency} {(renda * desejos).toFixed(2).replace('.', ',')}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-semibold text-gray-700">Poupança (30%)</h4>
          <p className="text-lg text-gray-900">{currency} {(renda * poupanca).toFixed(2).replace('.', ',')}</p>
        </div>
        {investimento > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-semibold text-gray-700">Investimento</h4>
            <p className="text-lg text-gray-900">{currency} {(renda * investimento).toFixed(2).replace('.', ',')}</p>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Estas são as suas metas de divisão de renda baseadas na regra 50/20/30 (Necessidades/Desejos/Poupança).
      </p>
    </div>
  );
}