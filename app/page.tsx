import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { LanguagesSection } from "@/components/languages-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="animate-in fade-in duration-1000">
          <HeroSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-300">
          <AboutSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-500">
          <ExperienceSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-700">
          <EducationSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-900">
          <SkillsSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-1100">
          <ProjectsSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-1300">
          <CertificationsSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-1500">
          <LanguagesSection />
        </div>
        <div className="animate-in slide-in-from-bottom-8 duration-700 delay-1700">
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
