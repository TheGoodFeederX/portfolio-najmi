"use client"

import { NeonText } from "@/components/ui/neon-text"
import { NeonCard } from "@/components/ui/neon-card"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

interface Education {
  id: number
  institution: string
  degree: string
  field_of_study: string
  start_date: string
  end_date: string
  gpa: string
}

interface EducationSectionProps {
  educations: Education[]
}

export function EducationSection({ educations }: EducationSectionProps) {
  // Format date to display in a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ms-MY", { year: "numeric" })
  }

  return (
    <section id="education" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <NeonText as="h2" variant="green" className="text-3xl md:text-4xl mb-4">
            Education
          </NeonText>
          <div className="w-24 h-1 bg-neon-green mx-auto rounded-full neon-green-border"></div>
        </div>

        <div className="grid gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <NeonCard variant="green" className="relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-green/5 rounded-full"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center neon-green-border">
                    <GraduationCap className="w-8 h-8 text-neon-green" />
                  </div>

                  <div className="flex-grow">
                    <NeonText as="h3" variant="green" className="text-xl mb-1">
                      {edu.degree}
                    </NeonText>
                    {edu.field_of_study && <p className="text-gray-300 mb-2">{edu.field_of_study}</p>}
                    <NeonText as="h4" variant="gradient" className="text-lg mb-3">
                      {edu.institution}
                    </NeonText>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        <span>CGPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
