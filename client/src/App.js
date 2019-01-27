import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Factoids from './components/Factoids';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <img alt="Mike McGowan" src="/MikeMcGowanProfile.jpg" />
        <Factoids />
      </div>
    );
  }
}

export default App;