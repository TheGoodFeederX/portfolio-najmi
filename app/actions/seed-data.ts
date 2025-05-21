"use server"

import { sql } from "@/lib/db"

export async function seedProfileData() {
  try {
    // Check if user exists
    const existingUser = await sql`
      SELECT * FROM users WHERE email = 'zulnajmizullkifli@gmail.com'
    `

    let userId

    if (existingUser.length === 0) {
      // Create user
      const newUser = await sql`
        INSERT INTO users (name, email, password) 
        VALUES (
          'Mohamad Zulnajmi Bin Zullkifli', 
          'zulnajmizullkifli@gmail.com', 
          'hashed_password_placeholder'
        ) 
        RETURNING id
      `
      userId = newUser[0].id
    } else {
      userId = existingUser[0].id
    }

    // Create or update profile
    await sql`
      INSERT INTO profile (
        user_id, full_name, title, bio, phone, address, profile_image_url
      ) 
      VALUES (
        ${userId},
        'Mohamad Zulnajmi Bin Zullkifli',
        'Guru Bahasa & Pengajar',
        'Seorang yang bersemangat, bersifat ingin tahu telah mencapai pendekatan yang matang dan bertanggungjawab. Bersemangat untuk belajar perkara baru dan dapat bekerja dengan penyeliaan minimum. Bersedia untuk bekerja di syarikat anda untuk memperoleh dan mengaplikasikan pengetahuan baru juga pengalaman ke arah pertumbuhan kerjaya saya.',
        '013-4588718',
        'No 16A, Kampung Jelutong, 06300 Kuala Nerang, Kedah',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohamad%20Zulnajmi.png-GTs7N4wGZStBIr7pgPDVbnwaCr9Nir.jpeg'
      )
      ON CONFLICT (id) DO UPDATE SET 
        full_name = 'Mohamad Zulnajmi Bin Zullkifli',
        title = 'Guru Bahasa & Pengajar',
        bio = 'Seorang yang bersemangat, bersifat ingin tahu telah mencapai pendekatan yang matang dan bertanggungjawab. Bersemangat untuk belajar perkara baru dan dapat bekerja dengan penyeliaan minimum. Bersedia untuk bekerja di syarikat anda untuk memperoleh dan mengaplikasikan pengetahuan baru juga pengalaman ke arah pertumbuhan kerjaya saya.',
        phone = '013-4588718',
        address = 'No 16A, Kampung Jelutong, 06300 Kuala Nerang, Kedah',
        profile_image_url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohamad%20Zulnajmi.png-GTs7N4wGZStBIr7pgPDVbnwaCr9Nir.jpeg'
    `

    // Add education
    await sql`
      INSERT INTO education (
        user_id, institution, degree, field_of_study, start_date, end_date, gpa
      ) 
      VALUES (
        ${userId},
        'Universiti Sultan Zainal Abidin',
        'Diploma Pengajian Islam',
        'Usuluddin',
        '2015-01-01',
        '2017-12-31',
        '3.74'
      )
    `

    await sql`
      INSERT INTO education (
        user_id, institution, degree, field_of_study, start_date, end_date, gpa
      ) 
      VALUES (
        ${userId},
        'Universiti Sultan Zainal Abidin',
        'ISM Usuluddin Dengan Kaunseling Dengan Kepujian',
        '',
        '2017-01-01',
        '2020-12-31',
        '3.68'
      )
    `

    // Add experience
    await sql`
      INSERT INTO experience (
        user_id, company, position, location, start_date, end_date, description
      ) 
      VALUES (
        ${userId},
        'JKM TRIGONA AGROFARM',
        'PEMBANTU JUALAN',
        'Kuala Nerang, Kedah',
        '2020-01-01',
        '2020-12-31',
        'Membantu menguruskan stok bunga dan bahan-bahan organik
Menguruskan urusan surat-menyurat'
      )
    `

    await sql`
      INSERT INTO experience (
        user_id, company, position, location, start_date, end_date, description
      ) 
      VALUES (
        ${userId},
        'SMA AL-KHAIRIAH',
        'GURU BAHASA',
        'Kuala Nerang, Kedah',
        '2023-01-01',
        '2023-12-31',
        'Mengurus dan melaksanakan pengajaran dan pembelajaran dalam kelas
Merancang dan menyediakan bahan untuk aktiviti PdP'
      )
    `

    await sql`
      INSERT INTO experience (
        user_id, company, position, location, start_date, end_date, description
      ) 
      VALUES (
        ${userId},
        'SRI AL-KHAIRIAH',
        'GURU BAHASA',
        'Kuala Nerang, Kedah',
        '2024-01-01',
        null,
        'Merancang, mengurus dan melaksanakan PdP
Setiausaha PIBG | Menguruskan surat dan aktiviti persatuan'
      )
    `

    // Add skills
    const skills = [
      { name: "Word", proficiency: 85 },
      { name: "Excel", proficiency: 75 },
      { name: "PowerPoint", proficiency: 75 },
      { name: "Bahasa Melayu", proficiency: 100 },
      { name: "Bahasa Inggeris", proficiency: 75 },
      { name: "Pengacaraan Majlis", proficiency: 85 },
    ]

    for (const skill of skills) {
      await sql`
        INSERT INTO skills (user_id, name, proficiency) 
        VALUES (${userId}, ${skill.name}, ${skill.proficiency})
      `
    }

    return { success: true, message: "Data seeded successfully" }
  } catch (error) {
    console.error("Error seeding data:", error)
    return { success: false, message: "Failed to seed data" }
  }
}
