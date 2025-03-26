import React from 'react';
import './App.css'; 
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/SkillsSection';
import Profile from './components/ProfileSection';
import Projects from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Skills />
      <Profile  /> 
      <Projects /> 
      <Footer   />
    </div>
  );
}

export default App;
