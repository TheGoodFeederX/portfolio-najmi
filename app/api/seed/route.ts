import { NextResponse } from "next/server"
import { seedProfileData } from "@/app/actions/seed-data"

export async function GET() {
  try {
    const result = await seedProfileData()

    if (result.success) {
      return NextResponse.json({ message: result.message }, { status: 200 })
    } else {
      return NextResponse.json({ message: result.message }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in seed route:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
