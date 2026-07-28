import { motion } from "framer-motion";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Education
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Academic background
        </h3>

        <div className="mt-10 flex flex-col gap-6">
          {education.map((entry) => (
            <div
              key={entry.school}
              className="flex flex-col justify-between gap-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {entry.degree}
                </h4>
                <p className="mt-1 text-slate-400">{entry.school}</p>
                {entry.detail && (
                  <p className="mt-1 text-sm text-slate-500">
                    {entry.detail}
                  </p>
                )}
              </div>

              <span className="text-sm text-slate-400">{entry.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;