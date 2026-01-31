import { cva, type VariantProps } from 'class-variance-authority'; // Importe cva e VariantProps
import { cn } from '@/lib/utils'; // Certifique-se de que este caminho está correto e que 'cn' existe

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-mz-blue text-white hover:bg-mz-blue/90',
        destructive: 'bg-mz-red text-white hover:bg-mz-red/90',
        outline: 'border border-mz-blue text-mz-blue hover:bg-mz-blue hover:text-white',
        secondary: 'bg-gray-light text-gray-dark hover:bg-gray-medium',
        ghost: 'hover:bg-gray-light hover:text-gray-dark',
        link: 'text-mz-blue underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {} // Use VariantProps aqui

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants };
