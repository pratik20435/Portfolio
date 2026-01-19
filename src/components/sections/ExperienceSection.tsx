import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "@mantine/core";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Nxin In Tech",
    period: "2025",
    description:
      "Completed an internship as a Full Stack Developer, working on both frontend and backend development. Built responsive user interfaces using React, developed RESTful APIs, and collaborated with the team to implement real-world features and fix bugs.",
    type: "internship",
    icon: Briefcase,
  },

  {
    title: "Junior Developer",
    company: "Agency Co.",
    period: "2024",
    description:
      "Started my professional journey building websites and learning modern web technologies. Worked on various client projects.",
    type: "work",
    icon: Briefcase,
  },
  {
    title: "Bachelor's in Computer Science",
    company: "University",
    period: "2022",
    description:
      " Going to Graduated with honors. Focused on software engineering and web development courses.",
    type: "education",
    icon: GraduationCap,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Timeline
            active={experiences.length}
            bulletSize={40}
            lineWidth={2}
            color="violet"
            classNames={{
              root: "timeline-root",
              item: "timeline-item",
            }}
          >
            {experiences.map((exp, index) => (
              <Timeline.Item
                key={index}
                bullet={
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center"
                  >
                    <exp.icon className="h-5 w-5 text-white" />
                  </motion.div>
                }
                title={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  </motion.div>
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="p-4 rounded-xl glass mt-2 mb-6"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-medium text-primary">
                      {exp.company}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </Timeline.Item>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </section>
  );
}
