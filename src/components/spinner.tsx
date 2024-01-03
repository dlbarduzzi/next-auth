import type { VariantProps } from "class-variance-authority"

import * as React from "react"

import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva("animate-spin rounded-full border-[5px] shrink-0", {
  variants: {
    variant: {
      primary: "border-gray-200 border-r-gray-500",
    },
    size: {
      sm: "h-8 w-8 border-4",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spinnerVariants>

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Spinner.displayName = "Spinner"

export { Spinner }
