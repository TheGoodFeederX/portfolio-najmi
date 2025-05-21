"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { NeonText } from "@/components/ui/neon-text"
import { NeonButton } from "@/components/ui/neon-button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  name: string
  title: string
  imageUrl: string
}

export function HeroSection({ name, title, imageUrl }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("")
  const fullText = "Welcome to my portfolio"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-light mb-2">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <NeonText as="h1" variant="gradient" className="text-5xl md:text-7xl mb-4">
          {name}
        </NeonText>
        <NeonText as="p" variant="blue" className="text-xl md:text-2xl">
          {title}
        </NeonText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-neon-blue neon-border animate-float"
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 16rem, 20rem"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <NeonButton
          variant="blue"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          About Me
        </NeonButton>
        <NeonButton
          variant="purple"
          onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
        >
          Experience
        </NeonButton>
        <NeonButton
          variant="pink"
          onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
        >
          Education
        </NeonButton>
        <NeonButton
          variant="green"
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
        >
          Skills
        </NeonButton>
      </motion.div>
    </section>
  )
}
