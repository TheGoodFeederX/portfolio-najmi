import { AnimatedBackground } from "@/components/ui/animated-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { getProfile, getEducation, getExperience, getSkills } from "@/app/actions/get-data"

export default async function Home() {
  // Fetch data from the database
  const profile = await getProfile()
  const education = await getEducation()
  const experience = await getExperience()
  const skills = await getSkills()

  // If profile is not found, use default values
  const defaultProfile = {
    full_name: "Mohamad Zulnajmi Bin Zullkifli",
    title: "Guru Bahasa & Pengajar",
    bio: "Seorang yang bersemangat, bersifat ingin tahu telah mencapai pendekatan yang matang dan bertanggungjawab. Bersemangat untuk belajar perkara baru dan dapat bekerja dengan penyeliaan minimum. Bersedia untuk bekerja di syarikat anda untuk memperoleh dan mengaplikasikan pengetahuan baru juga pengalaman ke arah pertumbuhan kerjaya saya.",
    phone: "013-4588718",
    email: "zulnajmizullkifli@gmail.com",
    address: "No 16A, Kampung Jelutong, 06300 Kuala Nerang, Kedah",
    profile_image_url:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohamad%20Zulnajmi.png-GTs7N4wGZStBIr7pgPDVbnwaCr9Nir.jpeg",
  }

  const profileData = profile || defaultProfile

  return (
    <main>
      <AnimatedBackground />

      <HeroSection name={profileData.full_name} title={profileData.title} imageUrl={profileData.profile_image_url} />

      <AboutSection
        bio={profileData.bio}
        phone={profileData.phone}
        email={profileData.email}
        address={profileData.address}
      />

      <ExperienceSection experiences={experience} />

      <EducationSection educations={education} />

      <SkillsSection skills={skills} />

      <Footer />
    </main>
  )
}
