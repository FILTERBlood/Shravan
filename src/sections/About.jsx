import { motion } from "framer-motion";
import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          About Me
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Building things with code, backed by real-world data experience
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          {profile.summary}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          I'm currently working as a Data Analyst at eClerx, where I focus on
          data enrichment, process optimization, and delivering high-accuracy
          outputs across client projects. Alongside that, I've been building
          full-stack applications with the MERN stack — from authentication
          systems to REST APIs to responsive UIs — and I'm actively working
          toward a full-time role as a software developer.
        </p>
      </motion.div>
    </section>
  );
}

export default About;