import { NeonText } from "@/components/ui/neon-text"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <NeonText as="h1" variant="gradient" className="text-4xl mb-4">
          Loading...
        </NeonText>
      </div>

      <div className="w-16 h-16 border-4 border-t-neon-blue border-r-neon-purple border-b-neon-pink border-l-neon-green rounded-full animate-rotate"></div>
    </div>
  )
}
