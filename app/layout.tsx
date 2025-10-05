import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sai Gutti - GenAI Developer | Data Engineer | Data Analyst",
  description:
    "Turning raw data into intelligent experiences with Generative AI, automation, and scalable engineering.",
  keywords: [
    "Generative AI Developer",
    "Data Engineer",
    "Data Analyst",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "AI Automation Developer",
    "MLOps Engineer",
    "Generative AI",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Multi-Agent Systems",
    "AutoGen",
    "LangChain",
    "GROQ API",
    "Function Calling",
    "Prompt Engineering",
    "Embedding Models",
    "Sentence Transformers",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "Machine Learning Pipelines",
    "Azure Data Factory",
    "Azure Synapse Analytics",
    "Azure SQL Database",
    "Power BI",
    "Data Warehousing",
    "ETL Pipelines",
    "Data Orchestration",
    "Data Modeling",
    "Data Visualization",
    "CI/CD",
    "Azure DevOps",
    "REST APIs",
    "Docker",
    "FastAPI",
    "Qdrant",
    "PostgreSQL",
    "Business Intelligence",
    "Data-Driven Insights",
    "Predictive Analytics",
    "Statistical Modeling",
    "KPI Dashboards",
    "Data Strategy",
    "Process Automation",
    "Data Governance",
    "AI Innovation",
    "Scalable Solutions",
    "Data-Driven Decision Making",
    "Intelligent Systems Design",
    "Cross-Functional Collaboration",
    "Agile Development",
    "End-to-End AI Solutions"
  ],
  authors: [{ name: "Sai Gutti" }],
  openGraph: {
    title: "Sai Gutti - GenAI Developer | Data Engineer | Data Analyst",
    description: "Professional portfolio showcasing my work as a GenAI developer and data engineer.",
    type: "website",
  },
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
