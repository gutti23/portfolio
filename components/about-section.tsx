import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <Card className="p-6 text-center">
              <div className="w-48 h-48 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <img src="./cover.png" alt="John Doe" className="w-44 h-44 rounded-full object-cover" />
              </div>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
              I worked as a Data Engineer and Analyst with 3+ years of experience building scalable pipelines, BI dashboards, and cloud-native solutions.
               My career started with a strong interest in how data powers smarter decisions, leading me to develop expertise in Azure Data Factory, Power BI, Python, and SQL.
              </p>

                <p className="text-muted-foreground leading-relaxed">
                As part of my current role, I’m focusing on Generative AI. 
                I’ve developed projects such as a RAG pipeline for style transfer, a resume-matching system using embeddings,
                and AI-powered tools.
                </p>

              <p className="text-muted-foreground leading-relaxed">
              My goal is to combine data engineering with AI to create intelligent,
              adaptive solutions that deliver real business impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Career Goals</h3>
                <p className="text-sm text-muted-foreground">
                Innovating at the intersection of data engineering and Generative AI to design scalable, impactful systems
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Passions</h3>
                <p className="text-sm text-muted-foreground">
                Data-driven insights, AI-powered solutions, and bridging engineering with business value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
