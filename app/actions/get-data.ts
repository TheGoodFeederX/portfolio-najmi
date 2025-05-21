"use server"

import { sql } from "@/lib/db"

export async function getProfile() {
  try {
    const profile = await sql`
      SELECT p.* 
      FROM profile p
      JOIN users u ON p.user_id = u.id
      WHERE u.email = 'zulnajmizullkifli@gmail.com'
      LIMIT 1
    `

    return profile[0] || null
  } catch (error) {
    console.error("Error fetching profile:", error)
    return null
  }
}

export async function getEducation() {
  try {
    const education = await sql`
      SELECT e.* 
      FROM education e
      JOIN users u ON e.user_id = u.id
      WHERE u.email = 'zulnajmizullkifli@gmail.com'
      ORDER BY e.end_date DESC
    `

    return education || []
  } catch (error) {
    console.error("Error fetching education:", error)
    return []
  }
}

export async function getExperience() {
  try {
    const experience = await sql`
      SELECT e.* 
      FROM experience e
      JOIN users u ON e.user_id = u.id
      WHERE u.email = 'zulnajmizullkifli@gmail.com'
      ORDER BY e.start_date DESC
    `

    return experience || []
  } catch (error) {
    console.error("Error fetching experience:", error)
    return []
  }
}

export async function getSkills() {
  try {
    const skills = await sql`
      SELECT s.* 
      FROM skills s
      JOIN users u ON s.user_id = u.id
      WHERE u.email = 'zulnajmizullkifli@gmail.com'
      ORDER BY s.proficiency DESC
    `

    return skills || []
  } catch (error) {
    console.error("Error fetching skills:", error)
    return []
  }
}
