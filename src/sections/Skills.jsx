import { motion } from "framer-motion";
import skills from "../data/skills";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  languages: "Languages",
  tools: "Tools & Platforms",
};

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Skills
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          What I work with
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {categoryLabels[category] || category}
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;