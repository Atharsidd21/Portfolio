// import React from 'react'
import "./App.css";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/about.jsx";
import Skills from "./Components/Skills/skills.jsx";
import Education from "./Components/Education/education.jsx";
import Projects from "./Components/Projects/projects.jsx";

import Contact from "./Components/Contact/Contact.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Education/>
      <Projects/>
    
      <Contact/>
    </>
  );
}

export default App;
