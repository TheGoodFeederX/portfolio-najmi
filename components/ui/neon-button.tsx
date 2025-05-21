import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "purple" | "pink" | "green" | "yellow"
  size?: "sm" | "md" | "lg"
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "blue", size = "md", ...props }, ref) => {
    const variantClasses = {
      blue: "border-neon-blue text-neon-blue hover:bg-neon-blue/10 neon-border",
      purple: "border-neon-purple text-neon-purple hover:bg-neon-purple/10 neon-purple-border",
      pink: "border-neon-pink text-neon-pink hover:bg-neon-pink/10 neon-pink-border",
      green: "border-neon-green text-neon-green hover:bg-neon-green/10 neon-green-border",
      yellow: "border-neon-yellow text-neon-yellow hover:bg-neon-yellow/10 neon-yellow-border",
    }

    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    }

    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-md border-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

NeonButton.displayName = "NeonButton"

export { NeonButton }
