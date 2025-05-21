import { NeonText } from "@/components/ui/neon-text"
import { NeonButton } from "@/components/ui/neon-button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <NeonText as="h1" variant="gradient" className="text-9xl mb-4">
        404
      </NeonText>

      <NeonText as="h2" variant="blue" className="text-2xl mb-8">
        Page Not Found
      </NeonText>

      <Link href="/">
        <NeonButton variant="purple">Return Home</NeonButton>
      </Link>
    </div>
  )
}
