"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-in slide-in-from-top-4 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-lg">
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 relative group animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              <Menu
                className={`h-5 w-5 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <X
                className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden border-t border-border bg-background/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-md transition-all duration-300 hover:translate-x-2 animate-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
