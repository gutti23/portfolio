"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}

          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-600">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/gutti23/"
                  className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-rajeswari-gutti-3206ab1a7/"
                  className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            </div>


            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:sai.gutti.2000@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      sai.gutti.2000@gmail.com
                    </a>
                  </div>
                </div>


                <div className="flex items-center space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-500 delay-400">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Kaiserslautern, Germany</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            
          </div>
          
        </div>

        {/* Footer */}
      </div>
    </section>
  )
}
