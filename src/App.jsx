import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Education from "./sections/Education"
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
