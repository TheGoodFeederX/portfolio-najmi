import { neon } from "@neondatabase/serverless"

// Create a SQL client with the database URL
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to execute SQL queries with proper tagged template syntax
export async function query(strings: TemplateStringsArray, ...values: any[]) {
  try {
    return await sql(strings, ...values)
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}
