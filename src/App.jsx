import { useEffect } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import UpButton from "./components/UpButton";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <UpButton />

      <Footer />
    </>
  );
}

export default App;
