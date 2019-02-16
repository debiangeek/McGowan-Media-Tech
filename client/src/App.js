import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Factoids from './components/Factoids';
import Spacer from './components/Spacer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <Spacer />
        <Factoids />
        <Spacer />
        <Footer />
      </div>
    );
  }
}

export default App;
