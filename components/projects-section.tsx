import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Resume Matching using Word Embeddings and Sentence Transformers",
    description:
      "Developed a semantic search system to match resumes with relevant job roles using pre-trained word and sentence embeddings. Utilized GloVe for word-level similarity, Word2Vec (CBOW & SkipGram) for contextual learning, and RNN-LSTM for sentiment-based text evaluation. Encoded resumes using SentenceTransformer (all-MiniLM-L6-v2) and applied PCA for dimensionality reduction and visualization, achieving accurate role-based matching.",
    image: "./resume-matching.png",
    technologies: ["Python", "PyTorch", "NumPy", "Scikit-learn", "Matplotlib", "SentenceTransformers", "PCA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Stylized Retrieval-Augmented Generation (RAG + Neural Style Transfer)",
    description:
      "Implemented a full RAG pipeline integrating BM25 lexical retrieval and Chroma semantic search (sentence-transformers/all-mpnet-base-v2) for contextual style transformation. Built an ensemble retriever with deduplication and relevance formatting, and designed prompt templates for Mistral-7B-Instruct to perform style-guided rewriting. Demonstrated on AI/ML Wikipedia data to generate coherent, stylistically customized outputs.",
    image: "./RAG.jpg",
    technologies: ["Python", "LangChain", "Hugging Face", "SentenceTransformers", "ChromaDB", "BM25", "BeautifulSoup", "Requests", "NumPy"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Multi-Agent Meal Planning System (AutoGen + Llama3 + Budget Constraints)",
    description:
      "Designed a multi-agent system to collaboratively plan full-day meals within nutritional and budgetary limits using GROQ API (Llama3-70B). Developed specialized agents for Breakfast, Lunch, Dinner, Snack, and Budget validation, coordinated via RoundRobinGroupChat. Integrated a Budget Checker Tool for affordability checks and implemented termination control for efficient multi-agent communication.",
    image: "./mealplanner.png",
    technologies: ["Python", "AutoGen AgentChat", "GROQ API", "Llama3", "FunctionTool", "LangChain", "Matplotlib"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Depression Detection using Sentiment Analysis on Twitter",
    description:
      "Performed sentiment analysis on mental health–related tweets to detect depression patterns. Collected data using the Twitter API, pre-processed text with Python and NLP tools, and applied sentiment models (NLTK, TextBlob) to classify emotions. Extracted key metrics such as keyword frequency and sentiment proportions, visualized insights using Matplotlib and Seaborn.",
    image: "./sentiment.png",
    technologies: ["Python", "NLP", "Sentiment Analysis", "NLTK", "TextBlob", "Matplotlib", "Seaborn"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Brain Tumor Classification using CNN",
    description:
      "Built a convolutional neural network to classify MRI brain images into tumor and non-tumor categories. Preprocessed medical images with normalization and augmentation, optimized model architecture with dropout and batch normalization, and evaluated performance using accuracy, F1-score, and confusion matrix visualization. Achieved high accuracy in tumor detection and model interpretability.",
    image: "./brain-tumor.png",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Matplotlib", "Scikit-learn"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 p-0"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative w-full">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {project.featured && (
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground animate-in fade-in slide-in-from-top-2 duration-500 delay-300">
                  Featured
                </Badge>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
          
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
          
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:bg-accent/10 transition-colors duration-300 animate-in fade-in duration-500"
                    style={{ animationDelay: `${index * 100 + techIndex * 50}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
          
              <div className="flex gap-2 hidden">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2 bg-transparent hover:bg-accent/10 hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2 bg-transparent hover:bg-accent/10 hover:scale-105 transition-all duration-300"
                >
                  <Github className="h-3 w-3" />
                  Code
                </Button>
              </div>
            </div>
          </Card>
          
          ))}
        </div>
      </div>
    </section>
  )
}
