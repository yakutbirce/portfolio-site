import React from 'react';
import './App.css'; 
import Hero from './components/Hero';
import Skills from './components/SkillsSection';
import Profile from './components/ProfileSection';
import Projects from './components/ProjectsSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />  
      <Hero />
      <Skills />
      <Profile  /> 
      <Projects /> 
      <Footer   />
    </div>
  );
}

export default App;
