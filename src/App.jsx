import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Blog from './components/Blog'; // import your blog component
import { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";
import CursorStarTrail from "./components/CursorStarTrail";
import './App.css';
function App() {
  // useEffect(() => {
  //   fairyDustCursor({
  //     colors: ["#22d3ee"], // cyan-400
  //     particleCount: 3,
  //   });
  // }, []);

  return (
    <>
      <CursorStarTrail />
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="publications"><Publications /></div>
            <div id="experience"><Experience /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </>
        } />

        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
