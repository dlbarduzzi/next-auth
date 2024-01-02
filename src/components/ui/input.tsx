import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-12 w-full items-center rounded-md border-0 bg-white px-4 py-2
          text-sm text-gray-600 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2
          focus:ring-inset focus-visible:outline-none disabled:cursor-not-allowed
          disabled:bg-gray-50`,
          hasError
            ? "ring-red-500 focus:ring-red-500"
            : "ring-gray-300 focus:ring-blue-600",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
