import React, { Component } from "react";

import "../stylesheets/Projects.css";
import { projectList } from "./projectsConst";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <h2 className="project-text">Projects</h2>
        {projectList.map(pair => {
          return (
            <div className="project-flex">
              {pair.map(item => {
                return (
                  <div className="project-box">
                    <p className="project-text">{item.description}</p>
                    <a
                      className="project-link"
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project Site
                    </a>
                    <a
                      className="project-link"
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
