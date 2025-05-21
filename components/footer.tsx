"use client"

import { NeonText } from "@/components/ui/neon-text"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <NeonText as="h2" variant="gradient" className="text-2xl mb-6">
            Connect With Me
          </NeonText>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="mailto:zulnajmizullkifli@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-neon-blue hover:bg-gray-700 transition-colors neon-border"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:+60134588718"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-neon-purple hover:bg-gray-700 transition-colors neon-purple-border"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-neon-pink hover:bg-gray-700 transition-colors neon-pink-border"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-neon-green hover:bg-gray-700 transition-colors neon-green-border"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Mohamad Zulnajmi Bin Zullkifli. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ and futuristic neon vibes</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
