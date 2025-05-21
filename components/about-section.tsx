"use client"

import { NeonText } from "@/components/ui/neon-text"
import { NeonCard } from "@/components/ui/neon-card"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

interface AboutSectionProps {
  bio: string
  phone: string
  email: string
  address: string
}

export function AboutSection({ bio, phone, email, address }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <NeonText as="h2" variant="purple" className="text-3xl md:text-4xl mb-4">
            About Me
          </NeonText>
          <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full neon-purple-border"></div>
        </div>

        <NeonCard variant="purple" className="mb-8">
          <p className="text-lg leading-relaxed whitespace-pre-line">{bio}</p>
        </NeonCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <NeonCard variant="blue" className="flex items-center">
              <Phone className="w-10 h-10 text-neon-blue mr-4" />
              <div>
                <NeonText variant="blue" className="text-sm mb-1">
                  Phone
                </NeonText>
                <p>{phone}</p>
              </div>
            </NeonCard>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <NeonCard variant="pink" className="flex items-center">
              <Mail className="w-10 h-10 text-neon-pink mr-4" />
              <div>
                <NeonText variant="pink" className="text-sm mb-1">
                  Email
                </NeonText>
                <p>{email}</p>
              </div>
            </NeonCard>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <NeonCard variant="green" className="flex items-center">
              <MapPin className="w-10 h-10 text-neon-green mr-4" />
              <div>
                <NeonText variant="green" className="text-sm mb-1">
                  Location
                </NeonText>
                <p>{address}</p>
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
