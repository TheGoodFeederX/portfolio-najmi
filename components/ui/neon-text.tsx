import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface NeonTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "purple" | "pink" | "green" | "yellow" | "gradient"
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const NeonText = forwardRef<HTMLSpanElement, NeonTextProps>(
  ({ className, variant = "blue", as = "span", ...props }, ref) => {
    const variantClasses = {
      blue: "text-neon-blue neon-text",
      purple: "text-neon-purple neon-purple-text",
      pink: "text-neon-pink neon-pink-text",
      green: "text-neon-green neon-green-text",
      yellow: "text-neon-yellow neon-yellow-text",
      gradient: "gradient-text",
    }

    const Component = as

    return <Component className={cn("font-bold", variantClasses[variant], className)} ref={ref} {...props} />
  },
)

NeonText.displayName = "NeonText"

export { NeonText }
