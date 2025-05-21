"use client"

import { NeonText } from "@/components/ui/neon-text"
import { NeonCard } from "@/components/ui/neon-card"
import { motion } from "framer-motion"
import { Calendar, MapPin, Baby, GraduationCap, Award } from "lucide-react"
import Image from "next/image"
import { useState, useCallback } from "react"

interface BiodataEvent {
  year: string
  title: string
  description: string
  icon?: "birth" | "education" | "work" | "achievement"
  location?: string
  imageUrl?: string
}

interface BiodataSectionProps {
  events?: BiodataEvent[]
}

export function ExperienceSection({ events }: BiodataSectionProps) {
  // Default biodata events if none provided
  const defaultEvents: BiodataEvent[] = [
    {
      year: "1997",
      title: "Kelahiran",
      description:
        "Dilahirkan pada 1997 di Hospital Kuala Nerang oleh ibu bernama Puan Sharifah binti Zainon @ Shafie.",
      icon: "birth",
      location: "Hospital Kuala Nerang, Kedah",
      imageUrl: "/images/masakecil.jpg",
    },
    {
      year: "2001",
      title: "Pendidikan Awal",
      description: "Mendapat pendidikan awal di PASTI Al-Majidi, Kampung Barokhas.",
      icon: "education",
      location: "Kampung Barokhas",
    },
    {
      year: "2003",
      title: "Pendidikan Awal",
      description: "Meneruskan pendidikan awal di PASTI Al-Majidi, Kampung Barokhas.",
      icon: "education",
      location: "Kampung Barokhas",
    },
    {
      year: "2004",
      title: "Pendidikan Rendah",
      description:
        "Mendapat pendidikan awal di Sekolah Kebangsaan Kuala Nerang. Aktif dalam aktiviti kokurikulum seperti TIlawah al-Quran, Hafazan, Nasyid dan sebagainya. Cemerlang dalam akademik dan memperoleh keputusan 9A UPSR. Menyandang jawatan Ketua Pengawas selama satu sesi 2008-2009.",
      icon: "education",
      location: "Sekolah Kebangsaan Kuala Nerang",
      imageUrl: "/images/sekolahrendah.jpg",
    },
  ]

  const biodataEvents = events || defaultEvents

  // Function to get the appropriate icon
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case "birth":
        return <Baby className="w-4 h-4" />
      case "education":
        return <GraduationCap className="w-4 h-4" />
      case "achievement":
        return <Award className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  // State to track current page/year
  const [currentPage, setCurrentPage] = useState(0)

  // Navigation functions
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < biodataEvents.length - 1 ? prev + 1 : prev))
  }, [biodataEvents.length])

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  // Get current event
  const currentEvent = biodataEvents[currentPage]

  return (
    <section id="experience" className="min-h-screen w-full flex flex-col justify-center bg-black/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col justify-center"
      >
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <NeonText as="h2" variant="pink" className="text-3xl md:text-4xl mb-4">
              Biodata
            </NeonText>
            <div className="w-24 h-1 bg-neon-pink mx-auto rounded-full neon-pink-border"></div>
          </div>

          {/* Timeline navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`px-4 py-2 rounded-full ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"
              } transition-colors`}
            >
              <NeonText variant="white" className="text-sm">
                ← Previous
              </NeonText>
            </button>

            <NeonText variant="gradient" className="text-2xl font-bold">
              {currentEvent.year}
            </NeonText>

            <button
              onClick={nextPage}
              disabled={currentPage === biodataEvents.length - 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === biodataEvents.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"
              } transition-colors`}
            >
              <NeonText variant="white" className="text-sm">
                Next →
              </NeonText>
            </button>
          </div>

          {/* Timeline visualization */}
          <div className="relative h-2 bg-gray-800 rounded-full mb-8 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.7),0_0_10px_rgba(255,255,255,0.5),0_0_15px_rgba(255,255,255,0.3)]"
              style={{ width: `${((currentPage + 1) / biodataEvents.length) * 100}%` }}
            ></div>
          </div>

          {/* Current page content */}
          <motion.div
            key={currentEvent.year}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <NeonCard variant="pink" className="relative overflow-hidden min-h-[300px]">
              {/* Background image with overlay - Full page version */}
              {currentEvent.imageUrl && (
                <div className="absolute inset-0 z-0 w-full h-full">
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                  <Image
                    src={currentEvent.imageUrl || "/placeholder.svg"}
                    alt={`${currentEvent.year} - ${currentEvent.title}`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              )}

              {/* Content with relative positioning to appear above the background */}
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-6">
                  <NeonText as="h3" variant="pink" className="text-2xl md:text-3xl">
                    {currentEvent.title}
                  </NeonText>
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_5px_rgba(255,255,255,0.7),0_0_10px_rgba(255,255,255,0.5),0_0_15px_rgba(255,255,255,0.3)]">
                    {getIcon(currentEvent.icon)}
                  </div>
                </div>

                {currentEvent.location && (
                  <div className="flex items-center mb-6 text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{currentEvent.location}</span>
                  </div>
                )}

                <p className="whitespace-pre-line text-lg">{currentEvent.description}</p>
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
