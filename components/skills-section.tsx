import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Rest APIs", level: "Intermediate" },
      { name: "LLMs", level: "Advanced" },
      { name: "Azure Data Factory", level: "Advanced" },
      { name: "Azure Synapse", level: "Advanced" },
      { name: "Data Warehousing", level: "Advanced" },
      { name: "ETL Processes", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Power BI", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Azure Devops", level: "Advanced" },
      { name: "Qdrant", level: "Intermediate" },
      { name: "Retrieval Augment Generation", level: "Advanced" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Agile Methodologies", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "n8n", level: "Advanced" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "Computer Vision", level: "Advanced" },
      { name: "Data Analysis", level: "Advanced" },
      { name: "Data Visualization", level: "Advanced" },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-accent text-accent-foreground"
    case "Intermediate":
      return "bg-primary text-primary-foreground"
    case "Beginner":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between group hover:bg-accent/5 p-2 rounded-md transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                    style={{ animationDelay: `${index * 200 + skillIndex * 100}ms` }}
                  >
                    <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                    <Badge
                      className={`${getLevelColor(skill.level)} hover:scale-105 transition-transform duration-300`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
