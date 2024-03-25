import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-stone-300',
  {
    variants: {
      variant: {
        default:
          'bg-stone-900 text-stone-50 shadow hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90',
        destructive:
          'bg-red-500 text-stone-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/90',
        outline:
          'border shadow-sm border-stone-800 bg-stone-950 hover:bg-stone-800 hover:text-stone-50',
        secondary: 'shadow-sm bg-stone-800 text-stone-50 hover:bg-stone-800/80',
        ghost: 'hover:bg-stone-800 hover:text-stone-50',
        link: 'underline-offset-4 hover:underline text-stone-50',
        landing:
          ' bg-stone-100 hover:transition-[background-color] hover:duration-300 hover:ease-in focus:transition-[background-color] focus:duration-300 focus:ease-in focus:bg-stone-400 hover:bg-stone-400 text-black duration-150 ease-out',
      },
      size: {
        default: 'h-9 px-4 py-2',
        landing: 'h-9 ps-3 pe-1 py-4 rounded-oval',
        intro: 'h-10 px-5 py-6 rounded-md',
        sub: 'h-10 rounded-xxl px-5 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
