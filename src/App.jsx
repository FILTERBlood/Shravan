import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <Hero />
      </main>
    </>
  );
}

export default App;