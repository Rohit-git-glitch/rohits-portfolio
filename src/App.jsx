import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Education from "./sections/Education"
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Education/>
      <Projects />
      <Contact />
    </main>
  );
}

export default App;