import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4", className)}>{children}</div>
  )
}
