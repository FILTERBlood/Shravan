import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = {
    hero: <Hero />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />
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