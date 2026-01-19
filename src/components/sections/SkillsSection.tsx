import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", level: 95 },
//       { name: "TypeScript", level: 90 },
//       { name: "JavaScript", level: 95 },
//       { name: "Next.js", level: 85 },
//       { name: "Vue.js", level: 75 },
//     ],
//   },
//   {
//     title: "Styling",
//     skills: [
//       { name: "Tailwind CSS", level: 95 },
//       { name: "CSS3/SASS", level: 90 },
//       { name: "Styled Components", level: 85 },
//       { name: "Framer Motion", level: 80 },
//       { name: "Material UI", level: 85 },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     skills: [
//       { name: "Git/GitHub", level: 90 },
//       { name: "Vite/Webpack", level: 85 },
//       { name: "REST APIs", level: 90 },
//       { name: "GraphQL", level: 15 },
//       { name: "Testing (Jest)", level: 80 },
//     ],
//   },
// ];

const techStack = [
  "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS",
  "Node.js", "Git",  "REST API",
  "Vite", "HTML5",  "Framer Motion"
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full glass gradient-border text-sm font-medium cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill Bars */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + catIndex * 0.2 }}
              className="p-6 rounded-2xl glass"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + catIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full rounded-full gradient-bg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
