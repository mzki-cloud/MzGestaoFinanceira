import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const cardVariants = tv({
  base: 'bg-white rounded-xl shadow-md overflow-hidden',
  variants: {
    // Você pode adicionar variantes aqui para diferentes tipos de cards
  },
  defaultVariants: {},
});

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cardVariants({ className })} {...props} />
  );
}
