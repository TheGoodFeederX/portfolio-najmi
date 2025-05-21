"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  name: string
  percentage: number
  color?: "blue" | "purple" | "pink" | "green" | "yellow"
  className?: string
}

export function SkillBar({ name, percentage, color = "blue", className }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  const colorClasses = {
    blue: "bg-neon-blue",
    purple: "bg-neon-purple",
    pink: "bg-neon-pink",
    green: "bg-neon-green",
    yellow: "bg-neon-yellow",
  }

  const shadowClasses = {
    blue: "neon-border",
    purple: "neon-purple-border",
    pink: "neon-pink-border",
    green: "neon-green-border",
    yellow: "neon-yellow-border",
  }

  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            colorClasses[color],
            shadowClasses[color],
          )}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
