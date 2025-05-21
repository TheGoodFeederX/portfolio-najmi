"use client"

import { NeonText } from "@/components/ui/neon-text"
import { NeonCard } from "@/components/ui/neon-card"
import { SkillBar } from "@/components/ui/skill-bar"
import { motion } from "framer-motion"

interface Skill {
  id: number
  name: string
  proficiency: number
}

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const technicalSkills = skills.filter((skill) => ["Word", "Excel", "PowerPoint"].includes(skill.name))

  const languageSkills = skills.filter((skill) => ["Bahasa Melayu", "Bahasa Inggeris"].includes(skill.name))

  const otherSkills = skills.filter(
    (skill) => !["Word", "Excel", "PowerPoint", "Bahasa Melayu", "Bahasa Inggeris"].includes(skill.name),
  )

  // Colors for different skill categories
  const colors = ["blue", "purple", "pink", "green", "yellow"] as const

  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <NeonText as="h2" variant="yellow" className="text-3xl md:text-4xl mb-4">
            Skills
          </NeonText>
          <div className="w-24 h-1 bg-neon-yellow mx-auto rounded-full neon-yellow-border"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technicalSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NeonCard variant="blue">
                <NeonText as="h3" variant="blue" className="text-xl mb-6">
                  Technical Skills
                </NeonText>

                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.proficiency}
                    color={colors[index % colors.length]}
                  />
                ))}
              </NeonCard>
            </motion.div>
          )}

          {languageSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <NeonCard variant="purple">
                <NeonText as="h3" variant="purple" className="text-xl mb-6">
                  Language Skills
                </NeonText>

                {languageSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.proficiency}
                    color={colors[(index + 2) % colors.length]}
                  />
                ))}
              </NeonCard>
            </motion.div>
          )}

          {otherSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <NeonCard variant="green">
                <NeonText as="h3" variant="green" className="text-xl mb-6">
                  Other Skills
                </NeonText>

                <div className="grid md:grid-cols-2 gap-6">
                  {otherSkills.map((skill, index) => (
                    <SkillBar
                      key={skill.id}
                      name={skill.name}
                      percentage={skill.proficiency}
                      color={colors[(index + 4) % colors.length]}
                    />
                  ))}
                </div>
              </NeonCard>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
