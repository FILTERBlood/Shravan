import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = {
    hero: <Hero />,
    about: <About />,
    experience: <Experience />,
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-24">
        {sections[activeSection]}
      </main>
    </>
  );
}

export default App;