import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Experience
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Where I've worked
        </h3>

        <div className="mt-12 flex flex-col gap-10">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h4 className="text-xl font-semibold text-white">
                  {job.role} · {job.company}
                </h4>
                <span className="text-sm text-slate-400">
                  {job.startDate} – {job.endDate}
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">{job.location}</p>

              <ul className="mt-4 flex flex-col gap-2">
                {job.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;