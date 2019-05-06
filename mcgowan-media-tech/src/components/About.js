import React, { Component } from "react";

import '../stylesheets/About.css';

export default class About extends Component {
  render() {
    return (
      <div id="about-container">
        <div className="about-box">
            <h2>About Me: </h2>
            <p className="about-text">
            Currently I'm focusing on full stack web and mobile app development
            with React, and plan to continue building on
            my knowledge and portfolio. Programming is a passion for me and
            supporting my family is what drives me.
            </p>
        </div>
      </div>
    );
  }
}
