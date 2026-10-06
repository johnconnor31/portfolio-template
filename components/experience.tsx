"use client"

import { motion } from "framer-motion"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const experiences = [
  {
    year: "2025 - Present",
    title: "Principal Applications Engineer",
    company: "Oracle",
    description: "Led frontend architecture and contributed significantly to API development. Delivered multiple applications.",
    achievements: ["Architecture Design", "Team Leadership", "Performance Optimization"],
  },
  {
    year: "2022 - 2025",
    title: "Senior Frontend Developer",
    company: "Reltio India",
    description: "Developed responsive web applications and architected Code Quality and Seurity initiatives",
    achievements: ["React Development", "UI Implementation", "Quality", "Security", "Responsive UI"],
  },
  {
    year: "2017-2022",
    title: "Frontend Developer",
    company: "Reltio India",
    description: "Built user interfaces and learned modern web development practices.",
    achievements: ["Web Development", "Learning & Growth", "Problem Solving"],
  },
  {
    year: "2014 - 2017",
    title: "Associate Systems Engineer",
    company: "Finastra Software Solutions",
    description: "Worked on financial product OPICS building application using WPF and C#.Net",
    achievements: ["Full Stack Development", "Client Management", "Project Delivery"],
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-card/30">
      <SectionHeader
        subtitle="My journey"
        title="Professional Experience"
        description="A timeline of my career growth and professional achievements"
      />

      <motion.div
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative">
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
            )}

            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm text-primary font-semibold mt-2 md:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
