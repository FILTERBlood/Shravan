import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../components/ui/Button";
import profile from "../data/profile";
import socials from "../data/socials";
import profilePhoto from "../assets/profile.webp";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-8 pb-20 pt-12 md:flex-row md:justify-between md:pt-24"
    >
      {/* Left column: text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left"
      >
        <p className="mb-3 text-slate-400">Hello, I'm</p>

        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          {profile.firstName} {profile.lastName}
        </h1>

        <h2 className="mt-2 text-xl font-medium text-blue-500 sm:text-2xl">
          {profile.headLine}
        </h2>

        <p className="mt-5 text-slate-300">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="/Shravan_Kamble_Resume.docx" variant="secondary">
            Download Resume
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-6 md:justify-start">
          {socials.map((item) => {
            const Icon = icons[item.name];
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right column: photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={profilePhoto}
          alt={`${profile.firstName} ${profile.lastName}`}
          className="h-56 w-56 rounded-full border-4 border-slate-800 object-cover sm:h-64 sm:w-64 md:h-80 md:w-80"
        />
      </motion.div>
    </section>
  );
}

export default Hero;