import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Generative AI Developer",
    company: "Karlsruhe Institute of Technology, Germany",
    period: "Febraury 2025 — Present",
    description: "Created an end-to-end AI workflow to extract building data and predict construction age from satellite images.",
    achievements: [
    "Developed an OCR-based pipeline to extract construction and heritage (“Denkmal”) data from government PDFs and web sources.",
    "Automated scraping of official heritage databases to retrieve building addresses and construction years.",
    "Captured top-view satellite images via mapping APIs for each address and trained a CNN model to predict building age from imagery."
    ],
    technologies: ["Python", "Pytorch", "OpenCV", "Tesseract", "BeautifulSoup", "Selenium", "Openstreetmap"],
  },
  {
    title: "Data Engineer",
    company: "Schlumberger (SLB), India",
    period: "June 2023 — March 2024",
    description: "Delivered scalable, reliable, and automated data engineering solutions by developing and orchestrating ETL pipelines in Azure, ensuring high-quality, timely, and efficient data delivery for business intelligence.",
    achievements: [

      "Collaborated with business stakeholders to identify data engineering requirements and integrate them into framework development, leading to more effective and efficient project outcomes.",
      "Implemented scalable ETL pipelines for diverse data sources, ensuring high quality data integration.", 
      "Orchestrated data pipelines and data flows in Azure Data Factory to ensure timely and accurate data delivery, which increased data availability for business intelligence.",
      "Trouble shot and resolved data pipeline issues, minimising the downtime and enhancing operational efficiency.", 
      "Conducted thorough Unit-Testing for ETL workflows, ensuring robust, error-free systems and high quality releases Utilised Azure CI/CD to deploy code for Azure Data Factory (ADF) and Azure Database (ADB), streamlining deployment processes and improving release management."
    ],
    technologies: ["Azure Data Factory", "Azure SQL Database", "Azure DevOps", "Agile Methodology" ],
  },
  {
    title: "BI Developer",
    company: "Schlumberger (SLB), India",
    period: "July 2021 — May 2023",
    description: "Streamlined enterprise data operations by automating ingestion, monitoring, and analytics workflows to enhance efficiency and decision-making.",
    achievements: [
      "Developed automated data ingestion frameworks, reducing manual effort.",
      "Automated failure notifications through Logic Apps in case of process failures, enhancing operational efficiency and ensuring timely issue resolution.",
      "Developed Power BI dashboards, delivering actionable insights to business users.",
      "Assisted development teams in building pipeline orchestration frameworks aligned with operational requirements, contributing to more cohesive and efficient workflows.",
      "Ensured adherence to SLAs to achieve operational excellence, thereby maintaining high standards of service delivery and customer satisfaction"
    ],
    technologies: ["PowerBI", "Azure Data Factory", "Azure Logic Apps", "DAX", "Azure Synapse Analytics" ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
