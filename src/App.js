import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Impact />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
