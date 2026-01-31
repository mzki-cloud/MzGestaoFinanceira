import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-primary text-white hover:bg-red-600 focus:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-teal-600 focus:ring-secondary',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? 'span' : 'button'; // Ou um componente de Link, se asChild for usado com Next.js Link
  return (
    <Comp className={buttonVariants({ variant, size, className })} {...props} />
  );
}
