import type { VariantProps } from "class-variance-authority"

import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm
  font-medium transition-colors duration-200 focus-visible:outline
  focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        default:
          "bg-gray-800 text-white hover:bg-gray-600 focus-visible:outline-gray-800",
        light: `bg-white text-gray-800 border border-gray-300 hover:bg-gray-100
          focus-visible:outline-gray-800`,
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
