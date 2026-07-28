import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = {
    hero: <Hero setActiveSection={setActiveSection} />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
    education: <Education />

  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {sections[activeSection]}
      </main>
    </>
  );
}

export default App;