import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Projects
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Things I've built
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
            >
              <h4 className="text-xl font-semibold text-white">
                {project.title}
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {project.points.map((point, index) => (
                  <li key={index} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {(project.github || project.live) && (
                <div className="mt-6 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;