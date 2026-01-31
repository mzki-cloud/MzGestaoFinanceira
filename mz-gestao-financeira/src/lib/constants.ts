// src/lib/constants.ts

export const SYSTEM_BLUEPRINT = {
  name: "Mz Gestão Financeira",
  description: "Sistema completo para controle financeiro mensal com categorias, metas, cartões e balanço.",
  currency: "BRL",
  year_default: 2026,
  pages: [
    { id: "dashboard", title: "Dashboard", description: "Visão geral do mês selecionado incluindo totais, gráfico de despesas e status financeiro.", sections: ["Resumo Financeiro", "Gráfico de Gastos por Categoria", "Termômetro Financeiro", "Metas do Mês"] },
    { id: "months", title: "Meses", description: "Cada mês contém transações, totais, categorias e balanços.", subsections: ["Receitas", "Gastos Fixos", "Gastos Variáveis", "Investimentos", "Balanço do Mês", "Notas", "Histórico de Alterações"] },
    { id: "transactions", title: "Transações", description: "Lista completa de lançamentos filtráveis por mês, categoria e tipo.", filters: ["Mês", "Categoria", "Tipo (Receita/Despesa)", "Cartão", "Valor"] },
    { id: "cards", title: "Cartões", description: "Gerenciamento dos cartões utilizados no mês e valores associados.", fields: ["Nome do Cartão", "Fatura Atual", "Limite", "Ultima Fatura", "Status"] },
    { id: "settings", title: "Configurações", description: "Ajustes gerais do sistema.", options: ["Moeda", "Categorias Personalizadas", "Ano Base", "Preferências de Exibição"] },
  ],
  months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  categories: {
    fixed_expenses: {
      name: "Gastos Fixos",
      subcategories: ["Moradia", "Contas", "Assinaturas", "Educação", "Transporte", "Saúde", "Dízimo/Doações"],
    },
    variable_expenses: {
      name: "Gastos Variáveis",
      subcategories: ["Mercado", "Necessidades", "Eletrônicos", "Pet", "Roupas", "Beleza", "Presente", "Saúde", "Outros", "Comida fora", "Uber/99", "iFood", "Filhos", "Casa/Mobília"],
    },
    investments: {
      name: "Investimentos",
      subcategories: ["Poupança", "Investimento"],
    },
    income: {
      name: "Receitas",
      subcategories: ["Renda", "Transferência", "Fatura do Cartão"],
    },
  },
  month_template: {
    fixed_expenses: { total: 0.0 },
    variable_expenses: { total: 0.0 },
    income: { total: 2000.0 },
    balance: {
      renda: 2000,
      necessidades: 0.5,
      desejos: 0.2,
      poupanca: 0.3,
      investimento: 0.0,
      totals_extra: { optional_fields_allowed: true },
    },
    thermometer: "No Azul 🟢",
    notes: null,
  },
  data: {
    Jan: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Fev: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Mar: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Abr: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Mai: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Jun: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Jul: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Ago: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Set: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Out: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Nov: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
    Dez: {
      fixed_expenses: { total: 0.0 },
      variable_expenses: { total: 0.0 },
      income: { total: 2000.0 },
      balance: {
        renda: 2000,
        necessidades: 0.5,
        desejos: 0.2,
        poupanca: 0.3,
        investimento: 0.0,
        totals_extra: { optional_fields_allowed: true },
      },
      thermometer: "No Azul 🟢",
      notes: null,
    },
  },
  cards: ["Cartão 01", "Cartão 02", "Cartão 03", "Cartão 04"],
  rules: {
    auto_fill: true,
    calculate_totals: true,
    thermometer_status: {
      positive: "No Azul 🟢",
      neutral: "Neutro 🟡",
      negative: "No Vermelho 🔴",
    },
    default_income: 2000.0,
    default_expense_split: {
      necessidades: 0.5,
      desejos: 0.2,
      poupanca: 0.3,
      investimento: 0.0,
    },
  },
};

// Você também pode definir tipos TypeScript para a blueprint para melhor tipagem em todo o projeto
export type CategoryType = "fixed_expenses" | "variable_expenses" | "investments" | "income";

export interface Subcategory {
  name: string;
  subcategories: string[];
}

export interface Categories {
  fixed_expenses: Subcategory;
  variable_expenses: Subcategory;
  investments: Subcategory;
  income: Subcategory;
}

export interface MonthData {
  fixed_expenses: { total: number };
  variable_expenses: { total: number };
  income: { total: number };
  balance: {
    renda: number;
    necessidades: number;
    desejos: number;
    poupanca: number;
    investimento: number;
    totals_extra: { optional_fields_allowed: boolean };
  };
  thermometer: string;
  notes: string | null;
}

export interface SystemBlueprint {
  name: string;
  description: string;
  currency: string;
  year_default: number;
  pages: Array<{ id: string; title: string; description: string; sections?: string[]; subsections?: string[]; filters?: string[]; fields?: string[]; options?: string[] }>;
  months: string[];
  categories: Categories;
  month_template: MonthData;
  data: { [key: string]: MonthData };
  cards: string[];
  rules: {
    auto_fill: boolean;
    calculate_totals: boolean;
    thermometer_status: {
      positive: string;
      neutral: string;
      negative: string;
    };
    default_income: number;
    default_expense_split: {
      necessidades: number;
      desejos: number;
      poupanca: number;
      investimento: number;
    };
  };
}
