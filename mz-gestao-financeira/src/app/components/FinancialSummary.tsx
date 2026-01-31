interface FinancialSummaryProps {
  title: string;
  value: number;
  currency: string;
  type: "income" | "expense" | "balance";
}

export default function FinancialSummary({ title, value, currency, type }: FinancialSummaryProps) {
  let textColor = "text-gray-800";
  if (type === "income") textColor = "text-green-600";
  if (type === "expense") textColor = "text-red-600";
  if (type === "balance" && value > 0) textColor = "text-green-600";
  if (type === "balance" && value < 0) textColor = "text-red-600";

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`mt-1 text-2xl font-semibold ${textColor}`}>
        {currency} {value.toFixed(2).replace('.', ',')}
      </p>
    </div>
  );
}

// src/app/dashboard/components/FinancialThermometer.tsx
interface FinancialThermometerProps {
  status: string; // Ex: "No Azul 🟢", "Neutro 🟡", "No Vermelho 🔴"
}

export default function FinancialThermometer({ status }: FinancialThermometerProps) {
  let bgColor = "bg-gray-200";
  let textColor = "text-gray-800";

  if (status.includes("Azul")) {
    bgColor = "bg-green-100";
    textColor = "text-green-700";
  } else if (status.includes("Neutro")) {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-700";
  } else if (status.includes("Vermelho")) {
    bgColor = "bg-red-100";
    textColor = "text-red-700";
  }

  return (
    <div className={`p-5 rounded-lg text-center ${bgColor}`}>
      <p className="text-lg font-medium text-gray-600 mb-2">Status Financeiro</p>
      <p className={`text-3xl font-bold ${textColor}`}>{status}</p>
      <p className="mt-3 text-sm text-gray-500">
        Baseado no seu balanço atual e metas.
      </p>
    </div>
  );
}