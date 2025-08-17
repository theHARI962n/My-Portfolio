import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {

  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Experience />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
