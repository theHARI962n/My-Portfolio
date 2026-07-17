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
import { useEffect, useState  } from "react";
import { fairyDustCursor } from "cursor-effects";
import CursorStarTrail from "./components/CursorStarTrail";
import CommandPalette from "./components/CommandPalette";
import Resume from "./components/ResumeSection";
import Chatbot from "./components/chatbot";
import './App.css';
function App() {
  // useEffect(() => {
  //   fairyDustCursor({
  //     colors: ["#22d3ee"], // cyan-400
  //     particleCount: 3,
  //   });
  // }, []);

  const [searchOpen, setSearchOpen] = useState(false);

  // Cmd + K / Ctrl + K
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);



  return (
    <>
      <CursorStarTrail />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
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
            <div id="resume"><Resume /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </>
        } />

        {/* Blog page */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <CommandPalette
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <Chatbot />
    </>
  );
}

export default App;
