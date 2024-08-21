// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link ,} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import './App.css';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';
// import VoiceAssistant from './components/VoiceAssistant';
// import Particles from 'react-tsparticles';
import Social from './components/Social';
import Menu from './components/Menu';
//import VoiceSearch from './components/VoiceSearch';
import Project from './components/project';

function App() {
  return (
    <Router>
      <VoiceAssistant/>
      
      <Footer/>
      <Social/>
      <Menu/>
      

        
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project" element={<Project />} />
        </Routes>
    
    </Router>
  );
}

export default App;
