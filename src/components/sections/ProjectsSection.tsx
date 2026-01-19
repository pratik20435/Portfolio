// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Github, Folder } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const projects = [
//   {
//     title: "E-  Commerce Platform",
//     description: "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
//     tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
//     github: "https://github.com",
//     demo: "https://example.com",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//   },
//   {
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates, drag-and-drop, and team features.",
//     tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
//     github: "https://github.com",
//     demo: "https://example.com",
//     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//   },

//  {
//   title: "Product Inventory Management System",
//   description: "A full-stack web application designed to manage products, stock levels, suppliers, and sales efficiently. Includes features like real-time inventory tracking, CRUD operations, search and filter functionality, and role-based access.",
//   tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
//   github: "https://github.com",
//   demo: "https://example.com",
//   image: "https://www.mrpeasy.com/blog/best-inventory-management-systems",
// },

// ];

// export function ProjectsSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A selection of my recent work and personal projects
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group relative rounded-2xl overflow-hidden glass"
//             >
//               {/* Project Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Overlay buttons */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-3 rounded-full glass"
//                   >
//                     <Github className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-3 rounded-full gradient-bg text-white"
//                   >
//                     <ExternalLink className="h-5 w-5" />
//                   </motion.a>
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Folder className="h-5 w-5 text-primary" />
//                   <h3 className="font-semibold text-lg">{project.title}</h3>
//                 </div>
//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <Button variant="outline" size="lg" className="gradient-border">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2"
//             >
//               <Github className="h-5 w-5" />
//               View More on GitHub
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop, and team features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    title: "Product Inventory Management System",
    description:
      "A full-stack web application designed to manage products, stock levels, suppliers, and sales efficiently. Includes features like real-time inventory tracking, CRUD operations, search and filter functionality, and role-based access.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://multipurposethemes.com/wp-content/uploads/2023/11/Screen-Shot-2022-12-07-at-10.04.42.png",
  },
];

const minorProjects = [
  {
    title: "Todo List App",
    description:
      "A simple and intuitive todo list application with local storage, task categorization, and priority levels.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Watch",
    description:
      "An elegant digital watch display with multiple time zones, stopwatch, and timer functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
  },
  {
    title: "Shopping Cart",
    description:
      "A dynamic add-to-cart system with quantity controls, price calculation, and checkout interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic tic-tac-toe game with player vs player mode, win detection, and game history tracking.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Featured Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden glass"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full glass"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full gradient-bg text-white"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="gradient-border">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Minor Projects Section */}
      <section
        id="minor-projects"
        className="py-20 bg-muted/30 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minor <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Smaller projects and experiments showcasing fundamental concepts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden glass"
              >
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-full glass"
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 rounded-full gradient-bg text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-base">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
