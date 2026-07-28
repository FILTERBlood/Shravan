import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaXTwitter } from "react-icons/fa6";
import profile from "../data/profile";
import socials from "../data/socials";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
  Email: FaEnvelope,

};

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 pt-28 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Contact
        </h2>

        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Let's work together
        </h3>

        <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
          I'm currently open to new opportunities. Feel free to reach out if
          you'd like to work together or just say hello.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a          
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-slate-200 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400"
            >      
                <FaEnvelope className="h-5 w-5" />
                {profile.email}
            </a>

            <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-slate-200 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400"
            >
                <FaPhone className="h-5 w-5" />
                {profile.phone}
            </a>
        </div>

        <div className="mt-8 flex gap-5">
          {socials
            .filter((item) => item.name !== "Email")
            .map((item) => {
              const Icon = icons[item.name];
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/50 text-slate-400 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;