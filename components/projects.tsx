"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const projects = [
  {
    id: 1,
    title: "Page Oracle Plugin",
    description: "a browser plugin that lets users to select any text on a page and enquire AI about explaining it",
    image: "/ecommerce-dashboard.jpg",
    tags: ["Javascript", "Node.js", "Next.Js", "LLM"],
    category: "AI/ML",
    demo: "https://chromewebstore.google.com/detail/pageoracle-%E2%80%93-ask-ai-about/jpjaklgajplpajmiofhglpeemoglbcfb?authuser=0&hl=en-GB",
    github: "https://github.com/johnconnor31/pageOracle",
  },
  {
    id: 2,
    title: "Multi Autocomplete",
    description: "A new Material UI component that takes Autocomplete feature and moves it up a notch",
    image: "/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "Material UI"],
    category: "Frontend",
    demo: "https://multiautocomplete-three.vercel.app/",
    github: "https://github.com/johnconnor31/MultiAutoComplete",
  },
  {
    id: 3,
    title: "Online File Editor",
    description: "An online File Editor that will let you auto save any files using Socket.io",
    image: "/social-media-app.jpg",
    tags: ["React", "TypeScript", "Next.Js", "WebSocket"],
    category: "Full Stack",
    demo: "#",
    github: "https://github.com/johnconnor31/file_editor",
  }
]

const categories = ["All", "Frontend", "Full Stack", "AI/ML"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <SectionWrapper id="projects" className="bg-card/30">
      <SectionHeader
        subtitle="My work"
        title="Featured Projects"
        description="A selection of projects showcasing my expertise in modern web development"
      />

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
              : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <CardHover className="group h-full flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 gradient-text">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-semibold border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded font-semibold text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded font-semibold text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </CardHover>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-muted-foreground text-lg">No projects found in this category.</p>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
