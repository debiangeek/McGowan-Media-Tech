import React from 'react';

import AppNavbar from './components/AppNavBar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

import './stylesheets/App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div id="flex-container">
        <Intro />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
