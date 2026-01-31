import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: 'block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200',
  variants: {
    // Você pode adicionar variantes aqui se precisar de diferentes estilos de input
  },
  defaultVariants: {},
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input className={inputVariants({ className })} {...props} />
  );
}
