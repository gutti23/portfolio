import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor in Computer Science",
    university: "Amritha Vishwa Vidyapeetham, India",
    period: "2017 — 2021",
    gpa: "2.0",
    thesis: "Depression Detection Using Twitter Sentiment Analysis",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "AI and Machine Learning",
      "Computer Vision",
      "Software Engineering",
      "Natural Language Processing",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 min-w-0">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-accent font-medium">{edu.university}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-left md:text-right">
                      <Badge variant="secondary">{edu.period}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Bachelor Thesis</h4>
                      <p className="text-muted-foreground text-sm">{edu.thesis}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge
                        key={course}
                        variant="outline"
                        className="text-xs sm:text-sm"
                        >
                        {course}
                        </Badge>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
