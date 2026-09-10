import React from "react";
import Preloader from './components/Preloader';
import Header from './components/Header';
import About from './components/About';
import Impact from './components/Impact';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Preloader />
      <Header />
      <About />
      <Impact />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
