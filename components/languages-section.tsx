import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from "lucide-react"

const languages = [
  {
    language: "Telugu",
    proficiency: "Native",
    flag: "🇮🇳",
  },
  {
    language: "English",
    proficiency: "Fluent",
    flag: "🇺🇸",
  },
  {
    language: "German",
    proficiency: "Conversational",
    flag: "🇩🇪",
  },
]

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case "Native":
      return "bg-accent text-accent-foreground"
    case "Fluent":
      return "bg-primary text-primary-foreground"
    case "Conversational":
      return "bg-secondary text-secondary-foreground"
    case "Basic":
      return "bg-muted text-muted-foreground"
    case "Learning":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
            <Globe className="h-8 w-8 text-accent" />
            Languages
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <Card className="p-8">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-4xl mb-2">{lang.flag}</div>
                <h3 className="font-semibold text-foreground">{lang.language}</h3>
                <Badge className={getProficiencyColor(lang.proficiency)}>{lang.proficiency}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            I believe in the power of communication across cultures and am always eager to learn new languages.
          </p>
        </div>
      </div>
    </section>
  )
}
