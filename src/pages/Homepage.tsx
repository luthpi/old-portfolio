import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { onscroll } from "../onscroll";

const Homepage = () => {
  useEffect(() => {
    onscroll();
  }, []);
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
};

export default Homepage;
