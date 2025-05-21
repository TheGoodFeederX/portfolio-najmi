import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface NeonCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "purple" | "pink" | "green" | "yellow"
}

const NeonCard = forwardRef<HTMLDivElement, NeonCardProps>(({ className, variant = "blue", ...props }, ref) => {
  const variantClasses = {
    blue: "border-neon-blue neon-border",
    purple: "border-neon-purple neon-purple-border",
    pink: "border-neon-pink neon-pink-border",
    green: "border-neon-green neon-green-border",
    yellow: "border-neon-yellow neon-yellow-border",
  }

  return (
    <div
      className={cn("rounded-lg border glass-effect p-6", variantClasses[variant], className)}
      ref={ref}
      {...props}
    />
  )
})

NeonCard.displayName = "NeonCard"

export { NeonCard }
