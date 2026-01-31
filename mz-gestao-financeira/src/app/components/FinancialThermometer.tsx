// src/app/components/FinancialThermometer.tsx
import React from 'react';

interface FinancialThermometerProps {
  currentValue: number;
  targetValue: number;
  label: string;
}

const FinancialThermometer: React.FC<FinancialThermometerProps> = ({ currentValue, targetValue, label }) => {
  const percentage = (currentValue / targetValue) * 100;
  const displayPercentage = Math.min(100, Math.max(0, percentage)); // Garante que a porcentagem esteja entre 0 e 100

  const getColor = (pct: number) => {
    if (pct >= 100) return 'bg-mz-green'; // Atingiu ou superou a meta
    if (pct > 70) return 'bg-yellow-500'; // Perto da meta
    return 'bg-mz-red'; // Longe da meta
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-dark mb-2">{label}</h4>
      <div className="relative w-full h-6 bg-gray-medium rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor(displayPercentage)} transition-all duration-500 ease-out`}
          style={{ width: `${displayPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span>Atual: R$ {currentValue.toFixed(2)}</span>
        <span>Meta: R$ {targetValue.toFixed(2)}</span>
      </div>
      <p className="text-center text-md font-bold mt-2">{displayPercentage.toFixed(0)}% da meta</p>
    </div>
  );
};

export default FinancialThermometer;
