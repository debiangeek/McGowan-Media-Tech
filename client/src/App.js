import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Factoids from './components/Factoids';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <img alt="Lightbulb" src="/bulb-close-up-dark.jpg" />
        <Factoids />
        <Footer />
      </div>
    );
  }
}

export default App;
