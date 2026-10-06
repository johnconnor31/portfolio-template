"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper"
import { CardHover } from "@/components/ui/card-hover"

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-card/30">
      <SectionHeader
        subtitle="Get to know me"
        title="About Me"
        description="Passionate developer with a focus on mastering technology architectures"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
            <Image
              src="/profilePic.png"
              alt="Professional portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a passionate developer with 12+ years of experience building scalable web applications. I have started my journey with working in Backend using C#.Net.
            I had started exploring Javascript ecosystem and really loved the ReactJs frontend framework for building Web apps and made it my career. I also gained expertise in building APIs using NodeJs and NextJs.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in creating performant, accessible, and beautiful user interfaces using React, TypeScript, and
            modern CSS. I&apos;m committed to write clean, maintainable code and staying updated with the latest industry
            trends.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <CardHover>
              <p className="text-3xl font-bold gradient-text mb-1">12+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardHover>
            <CardHover>
              <p className="text-3xl font-bold gradient-text mb-1">20+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </CardHover>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-sm font-semibold text-primary">Core Values</p>
            <div className="flex flex-wrap gap-2">
              {["Quality", "Innovation", "Collaboration", "Enthusiasm"].map((value) => (
                <span
                  key={value}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
