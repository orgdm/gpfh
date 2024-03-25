import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full bg-transparent py-1 text-sm shadow-sm transition-colors border-top-0 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-sky-500   disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-stone-400 focus-visible:ring-stone-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
