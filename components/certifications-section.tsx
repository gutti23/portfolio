import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

// Updated certifications array with logo paths
const certifications = [
  {
    title: "Fundamentals of AI Agents",
    issuer: "Hugging Face",
    date: "2025",
    credentialId: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/SaiGuti/2025-04-04.png",
    icon: "./hf-logo.svg", // Path to Hugging Face logo
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "https://www.credly.com/badges/399c5b31-85af-4449-82ec-a84ef5691cda",
    icon: "./microsoft-logo.svg", // Path to Microsoft logo
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "https://www.credly.com/badges/dcb8b0ff-24f3-4ee0-9481-32dd246c7f1d",
    icon: "./microsoft-logo.svg", // Path to Microsoft logo
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "https://learn.microsoft.com/en-us/users/sairajeswarigutti-0475/credentials/f906550870f27143",
    icon: "./microsoft-logo.svg", // Path to Microsoft logo
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "https://www.credly.com/badges/ac274f66-1b72-4ac0-8821-a6db50dc5216",
    icon: "./microsoft-logo.svg", // Path to Microsoft logo
  },
]

const awards = [
  {
    title: "Excellence Award",
    organization: "Schlumberger",
    year: "2022",
    description: "Recognized for outstanding performance and dedication to project success.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications & Awards</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Render SVG logos */}
                    <div className="w-10 h-10">
                      <img src={cert.icon} alt={`${cert.issuer} logo`} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-accent font-medium text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <a href={cert.credentialId} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Credential
                          </a>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Awards
            </h3>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{award.title}</h4>
                    <Badge variant="secondary">{award.year}</Badge>
                  </div>
                  <p className="text-accent font-medium text-sm mb-2">{award.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}