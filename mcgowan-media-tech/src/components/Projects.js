import React, { Component } from "react";

import "../stylesheets/Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <h2 className="project-text">Projects</h2>
        <div className="project-flex">
          <div className="project-box">
            <p className="project-text">
              A simple GitHub Markdown previewer, built with React.
            </p>
            <a
              className="project-link"
              href="https://markdown.mcgowanmedia.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Site
            </a>
            <a
              className="project-link"
              href="https://github.com/debiangeek/markdown-previewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="project-box">
            <p className="project-text">
              Random quote generator, built with React.
            </p>
            <a
              className="project-link"
              href="https://quotes.mcgowanmedia.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Site
            </a>
            <a
              className="project-link"
              href="https://github.com/debiangeek/Random-Quote-Generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}
