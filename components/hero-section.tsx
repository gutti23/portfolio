import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="text-foreground">Sai</span> <span className="text-accent">Gutti</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              GenAI Developer | Data Engineer | Data Analyst
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          I design and deliver scalable data solutions that transform raw information into actionable insights.
           Passionate on expanding my expertise in Generative AI to design intelligent and adaptive solutions.
          </p>

          <div className="flex flex-col hidden sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button size="lg" className="gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-accent/10 hover:text-black"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
            <a
              href="https://github.com/gutti23/"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-rajeswari-gutti-3206ab1a7/"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
