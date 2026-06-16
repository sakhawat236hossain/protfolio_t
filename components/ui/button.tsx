import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        animated:
          'relative inline-flex items-center justify-center h-12 rounded-full border-2 border-transparent bg-gradient-to-r from-[#9ba3ffd9] to-[#3d5af1] px-6 font-medium text-white shadow-2xl transition duration-300 hover:from-[#6c78ff] hover:to-[#2c49f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7c82f8] dark:from-[#070e41] dark:to-[#141d57]',
        active:
          'group relative inline-flex items-center justify-center h-12 rounded-md border-2 border-[#263381] bg-transparent px-6 font-medium text-black transition-all duration-100 translate-x-[3px] translate-y-[3px] hover:translate-x-[0px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(38_51_129)] hover:[box-shadow:5px_5px_rgb(38_51_129)] dark:text-white dark:border-[#4c64ff] dark:hover:[box-shadow:5px_5px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]',
        clickdown:
          'group relative inline-flex items-center justify-center h-12 rounded-md border-2 border-[#263381] bg-transparent px-6 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:text-white dark:border-[#4c64ff] dark:[box-shadow:5px_5px_rgb(76_100_255)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]',
        hoverGlow:
          'group relative inline-flex items-center justify-center h-12 rounded-full border-2 border-[#263381] bg-transparent px-6 font-medium text-black transition-all duration-300 hover:-translate-x-3 hover:-translate-y-3 hover:[box-shadow:5px_5px_20px_rgba(57,68,129,0.35)] dark:text-white dark:border-[#4c64ff]',
        rotating:
          'relative inline-flex h-12 rounded-full p-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7c82f8]'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
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
