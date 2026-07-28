import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import Button from "../components/ui/Button";
import profile from "../data/profile";
import socials from "../data/socials";
import profilePhoto from "../assets/profile.webp";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
  Email: FaEnvelope,

};

function Hero({setActiveSection}) {
  return (
    <section
      id="hero" className="min-h-screen max-w-4xl mx-auto px-6 pt-24 pb-12 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 md:gap-16 "
    >
      {/* Left column: text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl text-center md:text-left"
      >
        <p className="mb-3 text-xl font-medium tracking-wide text-slate-400 uppercase">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.firstName}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {profile.lastName}
          </span>
        </h1>

        <h2 className="mt-3 text-xl font-medium text-blue-400 sm:text-2xl">
          {profile.headLine}
        </h2>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
          {profile.summary}
        </p>

        <div className=" mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
          <Button onClick={()=>setActiveSection("projects")} variant="primary">
            View Projects
          </Button>
          <Button
            href={`${import.meta.env.BASE_URL}Shravan_Kamble_Resume.docx`}
            variant="secondary"
            download="Shravan_Kamble_Resume.docx"
          >
            Download Resume
          </Button>
        </div>

        <div className="translate-y-4 flex justify-center md:justify-start gap-5">
          {socials.map((item) => {
            const Icon = icons[item.name];
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/50 text-slate-400 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.45)]"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right column: photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Soft glow behind the photo */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl" />

        <img
          src={profilePhoto}
          alt={`${profile.firstName} ${profile.lastName}`}
          className="relative h-56 w-56 rounded-full border-4 border-slate-700/80 object-cover shadow-2xl shadow-blue-900/20 ring-1 ring-white/5 sm:h-64 sm:w-64 md:h-80 md:w-80"
        />
      </motion.div>
    </section>
  );
}

export default Hero;